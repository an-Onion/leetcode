function exist( board: string[][], word: string ): boolean {

    const visited: boolean[][] = Array.from( { length: board.length }, () => Array( board[0].length ).fill( false ) );

    function DFS( i: number, j: number, pos: number ): boolean {
        if( i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] !== word[pos] ) return false;
        if( pos === word.length - 1 ) return true;
        visited[i][j] = true;
        if( DFS( i+1, j, pos+1 ) ) return true;
        if( DFS( i-1, j, pos+1 ) ) return true;
        if( DFS( i, j+1, pos+1 ) ) return true;
        if( DFS( i, j-1, pos+1 ) ) return true;
        visited[i][j] = false;
    }

    for( let i = 0; i < board.length; i++ ){
        for( let j=0; j < board[0].length; j++ ){
           if( DFS( i, j, 0 ) ) return true;
        }
    }
    return false;
}


describe( '79 submissions', () => {
    it( 'example 1', () => {
        const board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCCED';
        expect( exist( board, word ) ).toBe( true );
    } );

    it( 'example 2', () => {
        const board = [
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E'],
        ];
        const word = 'SEE';
        expect( exist( board, word ) ).toBe( true );
    } );

    it( 'example 3', () => {
        const board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], word = 'ABCB';
        expect( exist( board, word ) ).toBe( false );
    } );

    it( 'example 4', () => {
        const board = [['C','A','A'],['A','A','A'],['B','C','D']];
        const word = 'AAB';
        expect( exist( board, word ) ).toBe( true );
    } );

} );