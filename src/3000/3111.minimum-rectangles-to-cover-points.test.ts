function minRectanglesToCoverPoints( points: number[][], w: number ): number {
    points.sort( ( a, b ) => a[0] - b[0] );
    let bound = -1,
        ret = 0;
    for ( const [x] of points ) {
        if ( x <= bound ) continue;
        bound = x + w;
        ret++;
    }
    return ret;
}

describe( '3111. minimum rectangles to cover points', () => {
    it( 'should return 2', () => {
        const points = [
                [2, 1],
                [1, 0],
                [1, 4],
                [1, 8],
                [3, 5],
                [4, 6],
            ],
            w = 1;

        expect( minRectanglesToCoverPoints( points, w ) ).toBe( 2 );
    } );
} );
