function minimumTime( time: number[], totalTrips: number ): number {
    let l = 1,
        r = 1e14;

    while ( l <= r ) {
        const m = Math.floor( ( l + r ) / 2 );
        if ( check( m ) ) r = m - 1;
        else l = m + 1;
    }
    return l;

    function check( totalTime: number ) {
        let trips = 0;
        for ( const t of time ) {
            trips += Math.floor( totalTime / t );
        }
        return trips >= totalTrips;
    }
}

describe( '2187. Minimum Time to Complete Trips', () => {
    it( 'should return 3', () => {
        expect( minimumTime( [1, 2, 3], 5 ) ).toEqual( 3 );
    } );

    it( 'should return 2', () => {
        expect( minimumTime( [2], 1 ) ).toEqual( 2 );
    } );
} );
