function maxIncreaseKeepingSkyline( grid: number[][] ): number {
    const maxRow = Array( grid.length ).fill( 0 );
    const maxCol = Array( grid[0].length ).fill( 0 );

    for ( let i = 0; i < grid.length; i++ ) {
        for ( let j = 0; j < grid[i].length; j++ ) {
            maxRow[i] = Math.max( maxRow[i], grid[i][j] );
            maxCol[j] = Math.max( maxCol[j], grid[i][j] );
        }
    }
    let ret = 0;

    for ( let i = 0; i < grid.length; i++ ) {
        for ( let j = 0; j < grid[i].length; j++ ) {
            ret += Math.min( maxRow[i], maxCol[j] ) - grid[i][j];
        }
    }
    return ret;
}

describe( '807. Max Increase to Keep City Skyline', () => {
    it( 'should return 35', () => {
        const grid = [
            [3, 0, 8, 4],
            [2, 4, 5, 7],
            [9, 2, 6, 3],
            [0, 3, 1, 0],
        ];
        expect( maxIncreaseKeepingSkyline( grid ) ).toBe( 35 );
    } );

    it( 'should return 0', () => {
        const grid = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        expect( maxIncreaseKeepingSkyline( grid ) ).toBe( 0 );
    } );
} );
