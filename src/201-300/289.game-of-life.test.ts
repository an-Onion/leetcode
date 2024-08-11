/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife( board: number[][] ): void {
    const m = board.length;
    const n = board[0].length;
    const dirs = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    for ( let i = 0; i < m; i++ ) {
        for ( let j = 0; j < n; j++ ) {
            let lives = 0;
            for ( const [r, c] of dirs ) {
                const [x, y] = [i + r, j + c];
                if ( x < 0 || x >= m || y < 0 || y >= n ) continue;
                if ( board[x][y] & 1 ) lives++;
            }

            if ( lives + board[i][j] === 3 || lives === 3 ) {
                board[i][j] |= 2;
            }
        }
    }

    for ( let i = 0; i < m; i++ ) {
        for ( let j = 0; j < n; j++ ) {
            board[i][j] >>= 1;
        }
    }
}

describe( '289. game of life', () => {
    it( 'example 1', () => {
        const board = [
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0],
        ];
        gameOfLife( board );
        expect( board ).toStrictEqual( [
            [0, 0, 0],
            [1, 0, 1],
            [0, 1, 1],
            [0, 1, 0],
        ] );
    } );

    it( 'example 2', () => {
        const board = [
            [1, 1],
            [1, 0],
        ];
        gameOfLife( board );
        expect( board ).toStrictEqual( [
            [1, 1],
            [1, 1],
        ] );
    } );
} );
