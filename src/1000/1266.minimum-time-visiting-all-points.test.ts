function minTimeToVisitAllPoints( points: number[][] ): number {
    let [x0, x1] = points[0];
    let ret = 0;
    for ( let i = 1; i < points.length; ++i ) {
        const [y0, y1] = points[i];
        ret += Math.max( Math.abs( x0 - y0 ), Math.abs( x1 - y1 ) );
        [x0, x1] = points[i];
    }
    return ret;
}

describe( '1266. Minimum Time Visiting All Points', () => {
    it( 'case 1', () => {
        expect(
            minTimeToVisitAllPoints( [
                [1, 1],
                [3, 4],
                [-1, 0],
            ] ),
        ).toBe( 7 );
    } );

    it( 'case 2', () => {
        expect(
            minTimeToVisitAllPoints( [
                [3, 2],
                [-2, 2],
            ] ),
        ).toBe( 5 );
    } );
} );
