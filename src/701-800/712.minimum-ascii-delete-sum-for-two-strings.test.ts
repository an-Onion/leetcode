function minimumDeleteSum( s1: string, s2: string ): number {
    const dp = Array.from( { length: s1.length + 1 }, () =>
        Array( s2.length + 1 ).fill( 0 ),
    );

    for ( let i = 1; i <= s1.length; i++ ) {
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt( i - 1 );
    }

    for ( let i = 1; i <= s2.length; i++ ) {
        dp[0][i] = dp[0][i - 1] + s2.charCodeAt( i - 1 );
    }

    for ( let i = 1; i <= s1.length; i++ ) {
        for ( let j = 1; j <= s2.length; j++ ) {
            if ( s1[i - 1] === s2[j - 1] ) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + s1.charCodeAt( i - 1 ),
                    dp[i][j - 1] + s2.charCodeAt( j - 1 ),
                );
            }
        }
    }
    return dp[s1.length][s2.length];
}

describe( '712. minimum-ascii-delete-sum-for-two-strings', () => {
    it( 'case 1', () => {
        const s1 = 'sea',
            s2 = 'eat';

        expect( minimumDeleteSum( s1, s2 ) ).toBe( 231 );
    } );

    it( 'case 2', () => {
        const s1 = 'delete',
            s2 = 'leet';

        expect( minimumDeleteSum( s1, s2 ) ).toBe( 403 );
    } );
} );
