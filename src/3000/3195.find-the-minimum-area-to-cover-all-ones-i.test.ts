function minimumArea( grid: number[][] ): number {
    let minX = grid.length;
    let maxX = 0;
    let minY = grid[0].length;
    let maxY = 0;

    for ( let i = 0; i < grid.length; i++ ) {
        for ( let j = 0; j < grid[0].length; j++ ) {
            if ( grid[i][j] !== 1 ) {
                continue;
            }
            minX = Math.min( minX, i );
            maxX = Math.max( maxX, i );
            minY = Math.min( minY, j );
            maxY = Math.max( maxY, j );
        }
    }
    return ( maxX - minX + 1 ) * ( maxY - minY + 1 );
}

describe( '3195. find-the-minimum-area-to-cover-all-ones-i', () => {
    it( 'case 1', () => {
        expect(
            minimumArea( [
                [0, 1, 0],
                [1, 0, 1],
            ] ),
        ).toBe( 6 );
    } );
    it( 'case 2', () => {
        expect(
            minimumArea( [
                [0, 0],
                [1, 0],
            ] ),
        ).toBe( 1 );
    } );
} );
