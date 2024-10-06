function findPoisonedDuration( timeSeries: number[], duration: number ): number {
    let ret = duration;

    for ( let i = 0; i < timeSeries.length - 1; ++i ) {
        if ( timeSeries[i + 1] < timeSeries[i] + duration ) {
            ret += timeSeries[i + 1] - timeSeries[i];
            continue;
        }
        ret += duration;
    }
    return ret;
}

describe( '495. Teemo Attacking', () => {
    it( 'should return 4', () => {
        expect( findPoisonedDuration( [1, 4], 2 ) ).toBe( 4 );
    } );
    it( 'should return 3', () => {
        expect( findPoisonedDuration( [1, 2], 2 ) ).toBe( 3 );
    } );
} );
