function countNegatives( grid: number[][] ): number {
    const m = grid[0].length;
    let count = 0,
        pos = grid[0].length - 1;
    for ( const row of grid ) {
        while ( pos >= 0 ) {
            if ( row[pos] >= 0 ) {
                break;
            }
            pos--;
        }
        count += m - pos - 1;
    }
    return count;
}

describe( '1351. count-negative-numbers-in-a-sorted-matrix', () => {
    it( 'case 1', () => {
        const grid = [
            [4, 3, 2, -1],
            [3, 2, 1, -1],
            [1, 1, -1, -2],
            [-1, -1, -2, -3],
        ];
        expect( countNegatives( grid ) ).toBe( 8 );
    } );

    it( 'case 2', () => {
        const grid = [
            [3, 2],
            [1, 0],
        ];
        expect( countNegatives( grid ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        const grid = [
            [5, 1, 0],
            [-5, -5, -5],
        ];
        expect( countNegatives( grid ) ).toBe( 3 );
    } );
} );
