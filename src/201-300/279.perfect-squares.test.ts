function numSquares( n: number ): number {

    const dp = Array( n+1 ).fill( Infinity );

    dp[0] = 0;

    for( let i = 1; i <=n; ++i ){
        for( let j = 1; j*j <= i; ++j ){
            dp[i] = Math.min( dp[i], dp[i - j*j] + 1 );
        }
    }
    return dp[n];
}

describe( '279. perfect-squares', () => {
    it( '12', () => {
        expect( numSquares( 12 ) ).toBe( 3 );
    } );

    it( '13', () => {
        expect( numSquares( 13 ) ).toBe( 2 );
    } );

} );