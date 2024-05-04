function isMatch( s: string, p: string ): boolean {

    const dp: boolean[][] = Array.from( Array( p.length + 1 ), () => Array( s.length + 1 ).fill( false ) );

    dp[0][0] = true;

    for( let j = 0; j < p.length; j++ ) {
        if( p[j] === '*' && dp[j][0] ) {
            dp[j + 1][0] = true;
        }
    }

    for( let i = 1; i <= p.length; i++ ){
        for( let j = 1; j <= s.length; j++ ) {
            if( p[i - 1] === '?' ) {
                dp[i][j] = dp[i - 1][j - 1];
                continue;
            }

            if( p[i - 1] === '*' ){
                dp[i][j] = dp[i - 1][j-1] || dp[i][j - 1] || dp[i - 1][j];
                continue;
            }

            if( s[j - 1] === p[i - 1] ){
                dp[i][j] = dp[i - 1][j - 1];
                continue;
            }
        }
    }

    return dp[p.length][s.length];
}

describe( '45. wildcard matching', () => {

    it( 'aa, *', () => {
        expect( isMatch( 'aa', '*' ) ).toBe( true );
    } );

    it( 'aa, a', () => {
        expect( isMatch( 'aa', 'a' ) ).toBe( false );
    } );

    it( 'aa, a*', () => {
        expect( isMatch( 'aa', 'a*' ) ).toBe( true );
    } );

    it( 'cb, ?a', () => {
        expect( isMatch( 'cb', '?a' ) ).toBe( false );
    } );
} );
