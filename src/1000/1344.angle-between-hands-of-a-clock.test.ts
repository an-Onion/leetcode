function angleClock( hour: number, minutes: number ): number {
    return 180 - Math.abs( Math.abs( ( hour % 12 ) * 30 - 5.5 * minutes ) - 180 );
}

describe( '1344. Angle Between Hands of a Clock', () => {
    it( 'case 1', () => {
        expect( angleClock( 12, 30 ) ).toBe( 165 );
    } );

    it( 'case 2', () => {
        expect( angleClock( 3, 30 ) ).toBe( 75 );
    } );

    it( 'case 3', () => {
        expect( angleClock( 3, 15 ) ).toBe( 7.5 );
    } );

    it( 'case 4', () => {
        expect( angleClock( 4, 50 ) ).toBe( 155 );
    } );

    it( 'case 5', () => {
        expect( angleClock( 12, 0 ) ).toBe( 0 );
    } );
} );
