function latestTimeCatchTheBus(
    buses: number[],
    passengers: number[],
    capacity: number,
): number {
    buses.sort( ( a, b ) => a - b );
    passengers.sort( ( a, b ) => a - b );
    let pos = 0,
        space = 0;

    for ( const bus of buses ) {
        space = capacity;
        while ( space && passengers[pos] <= bus ) {
            space--, pos++;
        }
    }

    pos--;
    let ret = space === 0 ? passengers[pos] : buses[buses.length - 1];
    while ( pos >= 0 && passengers[pos] === ret ) {
        pos--, ret--;
    }
    return ret;
}

describe( '2332. The Latest Time to Catch a Bus', () => {
    it( 'e.g. 1', () => {
        const buses = [10, 20],
            passengers = [2, 17, 18, 19],
            capacity = 2;
        expect( latestTimeCatchTheBus( buses, passengers, capacity ) ).toEqual( 16 );
    } );

    it( 'e.g. 2', () => {
        const buses = [20, 30, 10],
            passengers = [19, 13, 26, 4, 25, 11, 21],
            capacity = 2;
        expect( latestTimeCatchTheBus( buses, passengers, capacity ) ).toEqual( 20 );
    } );
} );
