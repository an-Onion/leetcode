function solveNQueens( n: number ): string[][] {

    const visited = Array.from( { length: n }, () => Array( n ).fill( false ) );

    function isValid( row: number, col: number ): boolean {
        for ( let delta = 1; delta <= col; ++delta ) {
            if( visited[row][col-delta] ) return false;
            if( visited[row-delta]?.[col-delta] ) return false;
        }

        for( let delta = 1; delta <= row; ++delta ) {
            if( visited[row-delta][col] ) return false;
            if( visited[row-delta]?.[col+delta] ) return false;
        }

        return true;
    }

    const toBoard = ( ): string[] => {
        const board = Array.from( { length: n }, () => Array( n ).fill( '.' ) );
        for( let row = 0; row < n; ++row ) {
            for( let col = 0; col < n; ++col ) {
                if( visited[row][col] ) board[row][col] = 'Q';
            }
        }
        return board.map( row => row.join( '' ) );
    };

    const result: string[][] = [ ];
    
    function DFS( row: number = 0 ) {
        if( row === n ) {
            result.push( toBoard( ) );
            return;
        }
        for( let col = 0; col < n; ++col ) {
            if( isValid( row, col ) ) {
                visited[row][col] = true;
                DFS( row + 1 );
                visited[row][col] = false;
            }
        }
    }

    DFS();

    return result;
}

describe( '50. N-Queens', () => {
    it( '1', () => {
        expect( solveNQueens( 1 ) ).toStrictEqual( [['Q']] );
    } );

    it( '2', () => {
        expect( solveNQueens( 2 ) ).toStrictEqual( [] );
    } );

    it( '4', () => {
        expect( solveNQueens( 4 ) ).toStrictEqual( [['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']] );
    } );

} );