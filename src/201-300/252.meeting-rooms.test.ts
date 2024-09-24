function canAttendMeetings( intervals: number[][] ): boolean {
    intervals.sort( ( a, b ) => a[0] - b[0] );
    for ( let i = 1; i < intervals.length; i++ ) {
        if ( intervals[i][0] < intervals[i - 1][1] ) {
            return false;
        }
    }
    return true;
}

describe( '252. Meeting Rooms', () => {
    it( 'e.g. 1', () => {
        expect(
            canAttendMeetings( [
                [0, 30],
                [5, 10],
                [15, 20],
            ] ),
        ).toBe( false );
    } );

    it( 'e.g. 2', () => {
        expect(
            canAttendMeetings( [
                [7, 10],
                [2, 4],
            ] ),
        ).toBe( true );
    } );
} );
