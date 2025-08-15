function isPowerOfFour( x: number ): boolean {
    return x > 0 && ( x & ( x - 1 ) ) === 0 && x % 3 === 1;
}

describe( '342. power of four', () => {
    it( '16', () => {
        expect( isPowerOfFour( 16 ) ).toBeTruthy();
    } );

    it( '5', () => {
        expect( isPowerOfFour( 5 ) ).toBeFalsy();
    } );

    it( '1', () => {
        expect( isPowerOfFour( 1 ) ).toBeTruthy();
    } );
} );
