function knightDialer( n: number ): number {
    const MOD = 10 ** 9 + 7;
    const moves = [
        [4, 6],
        [6, 8],
        [7, 9],
        [4, 8],
        [3, 9, 0],
        [],
        [1, 7, 0],
        [2, 6],
        [1, 3],
        [2, 4],
    ];

    const dp = Array.from( { length: 2 }, () => Array( 10 ).fill( 0 ) );
    dp[1].fill( 1 );

    for ( let i = 2; i <= n; i++ ) {
        const x = i & 1;
        for ( let j = 0; j < 10; j++ ) {
            dp[x][j] = 0;
            for ( const move of moves[j] ) {
                dp[x][j] = ( dp[x][j] + dp[x ^ 1][move] ) % MOD;
            }
        }
    }
    return dp[n & 1].reduce( ( a, b ) => ( a + b ) % MOD, 0 );
}

describe( '935.knight-dialer', () => {
    it( 'case 1', () => {
        expect( knightDialer( 1 ) ).toEqual( 10 );
    } );
    it( 'case 2', () => {
        expect( knightDialer( 2 ) ).toEqual( 20 );
    } );
    it( 'case 3', () => {
        expect( knightDialer( 3131 ) ).toEqual( 136006598 );
    } );
} );
