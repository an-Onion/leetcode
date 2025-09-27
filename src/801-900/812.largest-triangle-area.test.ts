function largestTriangleArea( points: number[][] ): number {
    let maxArea = 0;
    for ( let i = 0; i < points.length; i++ ) {
        for ( let j = i + 1; j < points.length; j++ ) {
            for ( let k = j + 1; k < points.length; k++ ) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];
                const area =
                    0.5 *
                    Math.abs(
                        x1 * y2 +
                            x2 * y3 +
                            x3 * y1 -
                            x1 * y3 -
                            x2 * y1 -
                            x3 * y2,
                    );
                maxArea = Math.max( maxArea, area );
            }
        }
    }

    return maxArea;
}

describe( '812.largest-triangle-area', () => {
    it( 'case 1', () => {
        expect(
            largestTriangleArea( [
                [0, 0],
                [0, 1],
                [1, 0],
                [0, 2],
                [2, 0],
            ] ),
        ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect(
            largestTriangleArea( [
                [1, 0],
                [0, 0],
                [0, 1],
            ] ),
        ).toBe( 0.5 );
    } );
} );
