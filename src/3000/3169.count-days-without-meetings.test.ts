function countDays( days: number, meetings: number[][] ): number {
    meetings.sort( ( a, b ) => a[0] - b[0] );
    let l = 1,
        r = 0;
    for ( const [s, e] of meetings ) {
        if ( s > r ) {
            days -= r - l + 1;
            l = s;
        }
        r = Math.max( r, e );
    }
    days -= r - l + 1;
    return days;
}

describe( '3169. count-days-without-meetings', () => {
    it( 'case 1', () => {
        expect(
            countDays( 10, [
                [1, 2],
                [3, 4],
                [5, 6],
                [7, 8],
            ] ),
        );
    } );
    it( 'case 2', () => {
        expect(
            countDays( 10, [
                [1, 2],
                [3, 4],
                [5, 6],
                [7, 8],
            ] ),
        );
    } );
    it( 'case 3', () => {
        expect(
            countDays( 10, [
                [1, 2],
                [3, 4],
                [5, 6],
                [7, 8],
            ] ),
        );
    } );
} );
