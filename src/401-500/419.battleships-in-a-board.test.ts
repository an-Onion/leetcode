function countBattleships( board: string[][] ): number {
    const M = board.length,
        N = board[0].length;
    let ret = 0;
    for ( let i = 0; i < M; ++i ) {
        for ( let j = 0; j < N; ++j ) {
            if ( board[i][j] === '.' ) continue;
            if ( board[i - 1]?.[j] === 'X' || board[i][j - 1] === 'X' ) continue;
            ret++;
        }
    }
    return ret;
}

describe( '419. Battleships in a Board', () => {
    it( 'Example 1', () => {
        const board = [
            ['X', '.', '.', 'X'],
            ['.', '.', '.', 'X'],
            ['.', '.', '.', 'X'],
        ];
        expect( countBattleships( board ) ).toEqual( 2 );
    } );

    it( 'Example 2', () => {
        const board = [
            ['X', 'X', 'X'],
            ['.', 'X', '.'],
            ['.', '.', '.'],
        ];
        expect( countBattleships( board ) ).toEqual( 1 );
    } );
} );
