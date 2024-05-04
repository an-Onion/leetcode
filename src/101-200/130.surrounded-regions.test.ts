function solve( board: string[][] ): void {

    const visited: boolean[][] = Array.from( Array( board.length ), () => Array( board[0].length ).fill( false ) );

    // run BFS only on the 'O's that are on the boundary
    const BFS = ( row: number, col: number ): void => {

        const dirs: [number, number][] = [
            [0, 1], [1, 0], [-1, 0], [0, -1],
        ];

        const Q: [number, number][] = [[row, col]];

        while( Q.length ) {

            const [r, c] = Q.shift()!;

            if ( visited[r][c] ) continue;
            visited[r][c] = true;

            for( const [dr, dc] of dirs ) {
                const nr = r + dr;
                const nc = c + dc;
                if( nr < 0 || nr >= board.length || nc < 0 || nc >= board[0].length ) continue;
                if( board[nr][nc] === 'X' ) continue;
                Q.push( [nr, nc] );
            }
        }
    };

    for( let i = 0; i < board.length; i++ ) {
        if( board[i][0] === 'O' ) BFS( i, 0 );
        if( board[i][board[0].length - 1] === 'O' ) BFS( i, board[0].length - 1 );
    }

    for( let j = 0; j < board[0].length; j++ ) {
        if( board[0][j] === 'O' ) BFS( 0, j );
        if( board[board.length - 1][j] === 'O' ) BFS( board.length - 1, j );
    }

    for( let i = 0; i < board.length; i++ ){
        for( let j = 0; j < board[0].length; j++ ){
            if( board[i][j] === 'O' && !visited[i][j] ) board[i][j] = 'X';
        }
    }
}

describe( '130. Surrounded Regions', () => {
    it( 'Example 1', () => {
        // prettier-ignore
        const board = [
            ['X','X','X','X'],
            ['X','O','O','X'],
            ['X','X','O','X'],
            ['X','O','X','X'],
        ];
        solve( board );
        expect( board ).toStrictEqual(
        [
            ['X','X','X','X'],
            ['X','X','X','X'],
            ['X','X','X','X'],
            ['X','O','X','X'],

        ] );
    } );

    it( 'Example 2', () => {
        // prettier-ignore
        const board = [['X']];
        solve( board );
        expect( board ).toStrictEqual( [['X']] );
    } );
} );