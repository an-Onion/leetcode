function numDistinct( s: string, t: string ): number {
    const dp = Array.from( Array( s.length+1 ), () => Array( t.length+1 ).fill( 0 ) );

    // for i == 0
    for( let j = 1; j <= s.length; j++ ){
        dp[j][1] = dp[j-1][1];
        if( s[j-1] === t[0] ) {
            dp[j][1] += 1;
        }
    }
    for( let i = 2; i <= t.length; i++ ){
        for( let j = 1; j <= s.length; j++ ){
            dp[j][i] = dp[j-1][i];
            if( s[j-1] === t[i-1] ) {
                dp[j][i] += dp[j-1][i-1];
            }
        }
    }
    return dp[s.length][t.length];
}

describe( '115. Distinct Subsequences', () => {

    it( '115. 1', () => {
        const s = 'rabbbit', t = 'rabbit';
        expect( numDistinct( s, t ) ).toEqual( 3 );
    } );

    it( '115. 2', () => {
        const s = 'babgbag', t = 'bag';
        expect( numDistinct( s, t ) ).toEqual( 5 );
    } );
} );