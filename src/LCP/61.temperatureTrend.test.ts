function temperatureTrend(
    temperatureA: number[],
    temperatureB: number[],
): number {
    let [sofar, ending] = [0, 0];

    for ( let i = 1; i < temperatureA.length; ++i ) {
        const tagA = getTrend( temperatureA[i], temperatureA[i - 1] );
        const tagB = getTrend( temperatureB[i], temperatureB[i - 1] );
        ending = tagA === tagB ? ending + 1 : 0;
        sofar = Math.max( ending, sofar );
    }
    return sofar;

    function getTrend( a: number, b: number ): number {
        if ( a === b ) return 0;
        return a > b ? 1 : -1;
    }
}

describe( 'LCP 61.temperatureTrend', () => {
    it( 'case 1', () => {
        const temperatureA = [21, 18, 18, 18, 31],
            temperatureB = [34, 32, 16, 16, 17];
        expect( temperatureTrend( temperatureA, temperatureB ) ).toEqual( 2 );
    } );

    it( 'case 2', () => {
        const temperatureA = [5, 10, 16, -6, 15, 11, 3],
            temperatureB = [16, 22, 23, 23, 25, 3, -16];

        expect( temperatureTrend( temperatureA, temperatureB ) ).toEqual( 3 );
    } );
} );
