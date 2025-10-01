function numWaterBottles( numBottles: number, numExchange: number ): number {
    return numBottles < numExchange
        ? numBottles
        : numBottles +
              Math.floor( ( numBottles - numExchange ) / ( numExchange - 1 ) ) +
              1;
}

describe( '1518. Water Bottles', () => {
    it( 'case 1', () => {
        expect( numWaterBottles( 9, 3 ) ).toBe( 13 );
    } );

    it( 'case 2', () => {
        expect( numWaterBottles( 15, 4 ) ).toBe( 19 );
    } );
} );
