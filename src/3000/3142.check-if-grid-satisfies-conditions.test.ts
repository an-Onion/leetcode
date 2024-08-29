function satisfiesConditions( grid: number[][] ): boolean {
    const N = grid[0].length,
        M = grid.length;

    for ( let i = 0; i < grid.length; i++ ) {
        for ( let j = 0; j < grid[i].length; j++ ) {
            // check row
            if ( i + 1 < M && grid[i][j] !== grid[i + 1][j] ) {
                return false;
            }
            if ( j + 1 < N && grid[i][j] === grid[i][j + 1] ) {
                return false;
            }
        }
    }

    return true;
}

describe( '3142. Check if Grid Satisfies Conditions', () => {
    it( 'e.g. 1', () => {
        expect(
            satisfiesConditions( [
                [1, 0, 2],
                [1, 0, 2],
            ] ),
        ).toBe( true );
    } );

    it( 'e.g. 2', () => {
        expect(
            satisfiesConditions( [
                [1, 1, 1],
                [0, 0, 0],
            ] ),
        ).toBe( false );
    } );

    it( 'e.g. 3', () => {
        expect( satisfiesConditions( [[1], [2], [3]] ) ).toBe( false );
    } );
} );
