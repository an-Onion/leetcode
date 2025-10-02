function maxBottlesDrunk( numBottles: number, numExchange: number ): number {
    const b = numExchange * 2 - 1;
    const k =
        Math.floor(
            ( Math.sqrt( b * b + ( numBottles - numExchange ) * 8 ) - b ) / 2,
        ) + 1;
    return numBottles + k;
}

describe( '3100. Water Bottles II', () => {
    it( 'case 1', () => {
        expect( maxBottlesDrunk( 13, 6 ) ).toBe( 15 );
    } );

    it( 'case 2', () => {
        expect( maxBottlesDrunk( 10, 3 ) ).toBe( 13 );
    } );
} );
