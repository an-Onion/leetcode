function maxFreeTime(
    eventTime: number,
    k: number,
    startTime: number[],
    endTime: number[],
): number {
    const n = startTime.length;
    const free = Array( n + 1 ).fill( 0 );

    free[0] = startTime[0];
    for ( let i = 1; i < startTime.length; i++ ) {
        free[i] = startTime[i] - endTime[i - 1];
    }

    free[n] = eventTime - endTime[n - 1];

    let ret = 0,
        sofar = 0;
    for ( let i = 0; i <= n; ++i ) {
        sofar += free[i];
        if ( i < k ) continue;
        ret = Math.max( ret, sofar );
        sofar -= free[i - k];
    }

    return ret;
}

describe( '3439. reschedule-meetings-for-maximum-free-time-i', () => {
    it( 'case 1', () => {
        const eventTime = 5,
            k = 1,
            startTime = [1, 3],
            endTime = [2, 5];
        expect( maxFreeTime( eventTime, k, startTime, endTime ) ).toBe( 2 );
    } );
    it( 'case 2', () => {
        const eventTime = 10,
            k = 1,
            startTime = [0, 2, 9],
            endTime = [1, 4, 10];
        expect( maxFreeTime( eventTime, k, startTime, endTime ) ).toBe( 6 );
    } );
} );
