function numberOfRightTriangles( grid: number[][] ): number {
    const M = grid.length,
        N = grid[0].length;

    const col = Array( N ).fill( 0 );

    for ( let i = 0; i < M; ++i ) {
        for ( let j = 0; j < N; ++j ) col[j] += grid[i][j];
    }

    let ret = 0;

    for ( let i = 0; i < M; ++i ) {
        const row = grid[i].reduce( ( acc, v ) => acc + v, 0 );
        for ( let j = 0; j < N; ++j ) {
            if ( !grid[i][j] ) continue;
            ret += ( row - 1 ) * ( col[j] - 1 );
        }
    }
    return ret;
}

describe( '3128. Number of Right Triangles in a Grid', () => {
    test( 'test case 1', () => {
        expect(
            numberOfRightTriangles( [
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 0],
            ] ),
        ).toBe( 2 );
    } );
    test( 'test case 2', () => {
        expect(
            numberOfRightTriangles( [
                [1, 0, 0, 0],
                [0, 1, 0, 1],
                [1, 0, 0, 0],
            ] ),
        ).toBe( 0 );
    } );
} );
