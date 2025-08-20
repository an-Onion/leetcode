function countSquares( matrix: number[][] ): number {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = new Array( m ).fill( 0 ).map( () => new Array( n ).fill( 0 ) );
    let ans = 0;
    for ( let i = 0; i < m; i++ ) {
        for ( let j = 0; j < n; j++ ) {
            if ( matrix[i][j] === 1 ) {
                if ( i === 0 || j === 0 ) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] =
                        Math.min( dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] ) +
                        1;
                }
                ans += dp[i][j];
            }
        }
    }
    return ans;
}

describe( '1277. count-square-submatrices-with-all-ones', () => {
    it( 'case 1', () => {
        const matrix = [
            [0, 1, 1, 1],
            [1, 1, 1, 1],
            [0, 1, 1, 1],
        ];
        expect( countSquares( matrix ) ).toBe( 15 );
    } );

    it( 'case 2', () => {
        const matrix = [
            [1, 0, 1],
            [1, 1, 0],
            [1, 1, 0],
        ];
        expect( countSquares( matrix ) ).toBe( 7 );
    } );
} );
