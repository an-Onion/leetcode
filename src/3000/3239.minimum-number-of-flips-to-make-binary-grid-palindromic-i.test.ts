function minFlips( grid: number[][] ): number {
    const M = grid.length,
        N = grid[0].length;

    let rows = 0;

    for ( let i = 0; i < M; ++i ) {
        for ( let j = 0; j < N >> 1; ++j ) {
            const k = N - j - 1;
            rows += grid[i][j] ^ grid[i][k];
        }
    }

    let cols = 0;

    for ( let j = 0; j < N; ++j ) {
        for ( let i = 0; i < M >> 1; ++i ) {
            const k = M - i - 1;
            cols += grid[i][j] ^ grid[k][j];
        }
    }

    return Math.min( cols, rows );
}

describe( '3239.minimum-number-of-flips-to-make-binary-grid-palindromic-i', () => {
    it( 'case 1', () => {
        const grid = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 1],
        ];
        expect( minFlips( grid ) ).toEqual( 2 );
    } );

    it( 'case 2', () => {
        const grid = [
            [0, 1],
            [0, 1],
            [0, 0],
        ];
        expect( minFlips( grid ) ).toEqual( 1 );
    } );

    it( 'case 3', () => {
        const grid = [[1], [0]];
        expect( minFlips( grid ) ).toEqual( 0 );
    } );

    it( 'case 4', () => {
        const grid = [
            [0, 1],
            [0, 1],
            [0, 0],
        ];

        expect( minFlips( grid ) ).toEqual( 1 );
    } );
} );
