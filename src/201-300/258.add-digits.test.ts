function addDigits( num: number ): number {
    return ( num - 1 ) % 9 + 1;
}

describe( '258. add digits', () => {
    it( '38', () => {
        expect( addDigits( 38 ) ).toBe( 2 );
    } );

    it( '0', () => {
        expect( addDigits( 0 ) ).toBe( 0 );
    } );

    it( '9', () => {
        expect( addDigits( 9 ) ).toBe( 9 );
    } );
} );