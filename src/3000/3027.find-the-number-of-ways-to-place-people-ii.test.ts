function numberOfPairs( points: number[][] ): number {
    const yPoints = points
        .sort( ( a, b ) => a[0] - b[0] || b[1] - a[1] )
        .map( ( [, y] ) => y );
    const n = yPoints.length;
    let ret = 0;
    for ( let i = 0; i < n; i++ ) {
        const y1 = yPoints[i];
        let maxY = -Infinity;
        for ( let j = i + 1; j < n && maxY < y1; j++ ) {
            const y2 = yPoints[j];
            if ( y2 <= y1 && maxY < y2 ) {
                ( maxY = y2 ), ret++;
            }
        }
    }
    return ret;
}

describe( '3027.find-the-number-of-ways-to-place-people-ii', () => {
    it( 'case 1', () => {
        expect(
            numberOfPairs( [
                [1, 1],
                [2, 2],
                [3, 3],
            ] ),
        ).toBe( 0 );
    } );

    it( 'case 2', () => {
        expect(
            numberOfPairs( [
                [6, 2],
                [4, 4],
                [2, 6],
            ] ),
        ).toBe( 2 );
    } );

    it( 'case 3', () => {
        expect(
            numberOfPairs( [
                [3, 1],
                [1, 3],
                [1, 1],
            ] ),
        ).toBe( 2 );
    } );
} );
