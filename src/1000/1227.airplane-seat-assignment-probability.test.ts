function nthPersonGetsNthSeat( n: number ): number {
    return n === 1 ? 1 : 0.5;
}

describe( '1227. Airplane Seat Assignment Probability', () => {
    it( 'should return 1 when n is 1', () => {
        expect( nthPersonGetsNthSeat( 1 ) ).toBe( 1 );
    } );

    it( 'should return 0.5 when n is 2', () => {
        expect( nthPersonGetsNthSeat( 2 ) ).toBe( 0.5 );
    } );
} );
