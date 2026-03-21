function reverseSubmatrix(
    grid: number[][],
    x: number,
    y: number,
    k: number,
): number[][] {
    for ( let j = y; j < y + k; j++ ) {
        for ( let i = x; i < x + ( k >> 1 ); i++ ) {
            const flip = x + k - 1 - i + x;
            [grid[i][j], grid[flip][j]] = [grid[flip][j], grid[i][j]];
        }
    }

    return grid;
}

describe( '3643. Flip Square Submatrix Vertically', () => {
    it( 'case 1', () => {
        const grid = [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16],
            ],
            x = 1,
            y = 0,
            k = 3;

        expect( reverseSubmatrix( grid, x, y, k ) ).toStrictEqual( [
            [1, 2, 3, 4],
            [13, 14, 15, 8],
            [9, 10, 11, 12],
            [5, 6, 7, 16],
        ] );
    } );

    it( 'case 2', () => {
        const grid = [
                [3, 4, 2, 3],
                [2, 3, 4, 2],
            ],
            x = 0,
            y = 2,
            k = 2;
        expect( reverseSubmatrix( grid, x, y, k ) ).toStrictEqual( [
            [3, 4, 4, 2],
            [2, 3, 2, 3],
        ] );
    } );

    it( 'case 3', () => {
        const grid = [
            [14, 3, 18, 16],
            [2, 14, 11, 20],
            [19, 19, 4, 15],
            [11, 15, 18, 6],
        ];
        expect( reverseSubmatrix( grid, 0, 0, 4 ) ).toStrictEqual( [
            [11, 15, 18, 6],
            [19, 19, 4, 15],
            [2, 14, 11, 20],
            [14, 3, 18, 16],
        ] );
    } );
} );
