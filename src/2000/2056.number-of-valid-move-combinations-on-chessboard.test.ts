function countCombinations( pieces: string[], positions: number[][] ): number {
    const directions = {
        rook: [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ],
        bishop: [
            [1, 1],
            [-1, -1],
            [-1, 1],
            [1, -1],
        ],
        queen: [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [-1, -1],
            [-1, 1],
            [1, -1],
        ],
    };
    const board: number[][][] = Array.from( { length: positions.length }, () =>
        Array.from( { length: 8 }, () => Array( 8 ).fill( 0 ) ),
    );
    return DFS( 0 );

    function DFS( i: number ): number {
        if ( i >= pieces.length ) return 1;
        const [x, y] = positions[i];
        let res = 0;
        for ( const [dx, dy] of directions[pieces[i]] ) {
            let blocked = false;
            for ( let step = res === 0 ? 1 : 2; !blocked; step++ ) {
                const nx = x - 1 + ( step - 1 ) * dx;
                const ny = y - 1 + ( step - 1 ) * dy;

                if ( nx < 0 || nx >= 8 || ny < 0 || ny >= 8 ) break;
                let canStop = true;

                for ( let j = 0; j < i; ++j ) {
                    canStop =
                        canStop &&
                        board[j][nx][ny] >= 0 &&
                        board[j][nx][ny] < step;
                    blocked =
                        blocked ||
                        ( board[j][nx][ny] < 0 && -board[j][nx][ny] <= step ) ||
                        board[j][nx][ny] === step;
                }
                if ( canStop ) {
                    board[i][nx][ny] = -step;
                    res += DFS( i + 1 );
                }
                board[i][nx][ny] = step;
            }
            board[i] = Array.from( { length: 8 }, () => Array( 8 ).fill( 0 ) );
        }
        return res;
    }
}

describe( '2056.number-of-valid-move-combinations-on-chessboard', () => {
    it( 'e.g. 1', () => {
        const pieces = ['rook'],
            positions = [[1, 1]];
        expect( countCombinations( pieces, positions ) ).toEqual( 15 );
    } );
    it( 'e.g. 2', () => {
        const pieces = ['queen'],
            positions = [[1, 1]];
        expect( countCombinations( pieces, positions ) ).toEqual( 22 );
    } );
    it( 'e.g. 3', () => {
        const pieces = ['bishop'],
            positions = [[4, 3]];
        expect( countCombinations( pieces, positions ) ).toEqual( 12 );
    } );
    it( 'e.g. 4', () => {
        const pieces = ['rook', 'rook'],
            positions = [
                [1, 1],
                [8, 8],
            ];
        expect( countCombinations( pieces, positions ) ).toEqual( 223 );
    } );
    it( 'e.g. 5', () => {
        const pieces = ['queen', 'bishop'],
            positions = [
                [5, 7],
                [3, 4],
            ];
        expect( countCombinations( pieces, positions ) ).toEqual( 281 );
    } );
} );
