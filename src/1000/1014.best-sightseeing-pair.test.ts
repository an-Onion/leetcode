function maxScoreSightseeingPair( values: number[] ): number {
    let sofar = 0,
        mx = values[0] + 0;
    for ( let i = 1; i < values.length; i++ ) {
        sofar = Math.max( sofar, mx + values[i] - i );
        mx = Math.max( mx, values[i] + i );
    }
    return sofar;
}

describe( '1014. Best Sightseeing Pair', () => {
    it( 'should return 11', () => {
        expect( maxScoreSightseeingPair( [8, 1, 5, 2, 6] ) ).toBe( 11 );
    } );

    it( 'should return 2', () => {
        expect( maxScoreSightseeingPair( [1, 2] ) ).toBe( 2 );
    } );
} );
