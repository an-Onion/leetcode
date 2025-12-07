function countOdds( low: number, high: number ): number {
    return ( ( high + 1 ) >> 1 ) - ( low >> 1 );
}

describe( '1523. count-odd-numbers-in-an-interval-range', () => {
    it( 'case 1', () => {
        expect( countOdds( 3, 7 ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( countOdds( 8, 10 ) ).toBe( 1 );
    } );
} );
