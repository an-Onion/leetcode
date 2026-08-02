function stoneGame( piles: number[] ): boolean {
    const n = piles.length;
    const dp: number[][] = Array.from( { length: n }, () =>
        new Array( n ).fill( 0 ),
    );

    for ( let i = 0; i < n; i++ ) {
        dp[i][i] = piles[i];
    }

    for ( let len = 2; len <= n; len++ ) {
        for ( let i = 0; i + len - 1 < n; i++ ) {
            const j = i + len - 1;
            dp[i][j] = Math.max(
                piles[i] - dp[i + 1][j],
                piles[j] - dp[i][j - 1],
            );
        }
    }

    return dp[0][n - 1] > 0;
}

describe( 'stone game', () => {
    it( 'case 1', () => {
        expect( stoneGame( [5, 3, 4, 5] ) ).toBe( true );
    } );
} );
