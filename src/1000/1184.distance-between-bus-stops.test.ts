import * as _ from 'lodash';

function distanceBetweenBusStops(
    distance: number[],
    start: number,
    destination: number,
): number {
    const sum = _.sum( distance );
    let clockwise = 0;
    if ( start > destination ) {
        [start, destination] = [destination, start];
    }
    for ( let i = start; i < destination; ++i ) {
        clockwise += distance[i];
    }
    return Math.min( clockwise, sum - clockwise );
}

describe( '1184. Distance Between Bus Stops', () => {
    it( 'e.g. 1', () => {
        expect( distanceBetweenBusStops( [1, 2, 3, 4], 0, 1 ) ).toBe( 1 );
    } );
    it( 'e.g. 2', () => {
        const distance = [1, 2, 3, 4],
            start = 0,
            destination = 2;
        expect( distanceBetweenBusStops( distance, start, destination ) ).toBe( 3 );
    } );

    it( 'e.g. 3', () => {
        expect( distanceBetweenBusStops( [1, 2, 3, 4], 0, 3 ) ).toBe( 4 );
    } );

    it( 'e.g. 4', () => {
        expect(
            distanceBetweenBusStops( [7, 10, 1, 12, 11, 14, 5, 0], 7, 2 ),
        ).toBe( 17 );
    } );
} );
