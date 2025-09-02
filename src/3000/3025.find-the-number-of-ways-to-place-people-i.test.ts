function numberOfPairs( points: number[][] ): number {
    points.sort( ( a, b ) => a[0] - b[0] || b[1] - a[1] );
    const n = points.length;
    let ans = 0;
    for ( let i = 0; i < n; i++ ) {
        const y1 = points[i][1];
        let max_y = -Infinity;
        for ( let j = i + 1; j < n && max_y < y1; j++ ) {
            const y2 = points[j][1];
            if ( y2 <= y1 && y2 > max_y ) {
                ( max_y = y2 ), ans++;
            }
        }
    }
    return ans;
}

describe( '3025.find-the-number-of-ways-to-place-people-i', () => {
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
