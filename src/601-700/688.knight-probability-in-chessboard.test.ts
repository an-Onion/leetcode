function knightProbability(
    n: number,
    k: number,
    row: number,
    column: number,
): number {
    const dp = Array.from( { length: k + 1 }, () =>
        Array.from( { length: n }, () => Array( n ).fill( 0 ) ),
    );

    const dirs = [
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
    ];

    for ( let step = 0; step <= k; step++ ) {
        for ( let i = 0; i < n; i++ ) {
            for ( let j = 0; j < n; j++ ) {
                if ( step === 0 ) {
                    dp[step][i][j] = 1;
                    continue;
                }
                for ( const [x, y] of dirs ) {
                    const x0 = i + x;
                    const y0 = j + y;
                    if ( x0 < 0 || x0 >= n || y0 < 0 || y0 >= n ) {
                        continue;
                    }
                    dp[step][i][j] += dp[step - 1][x0][y0] / 8;
                }
            }
        }
    }
    return dp[k][row][column];
}

describe( '688. knight-probability-in-chessboard', () => {
    it( 'case 1', () => {
        expect( knightProbability( 3, 2, 0, 0 ) ).toBe( 0.0625 );
    } );

    it( 'case 2', () => {
        expect( knightProbability( 1, 0, 0, 0 ) ).toBe( 1 );
    } );
} );
