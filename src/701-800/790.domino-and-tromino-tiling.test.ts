function numTilings( n: number ): number {
    const MOD: number = 1e9 + 7;

    const dp = [1, 1, 2];
    for ( let i = 3; i <= n; i++ ) {
        const val = ( dp[i - 1] * 2 + dp[i - 3] ) % MOD;
        dp.push( val );
    }
    return dp[n];
}

describe( '790. Domino and Tromino Tiling', () => {
    it( '3', () => {
        expect( numTilings( 3 ) ).toBe( 5 );
    } );

    it( '1', () => {
        expect( numTilings( 1 ) ).toBe( 1 );
    } );
} );
