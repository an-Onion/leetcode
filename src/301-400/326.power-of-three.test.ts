function isPowerOfThree( n: number ): boolean {
    return n > 0 && 1162261467 % n == 0;
}

describe( '326. power-of-three', () => {
    it( '27', () => {
        expect( isPowerOfThree( 27 ) ).toBeTruthy();
    } );

    it( '0', () => {
        expect( isPowerOfThree( 0 ) ).toBeFalsy();
    } );

    it( '9', () => {
        expect( isPowerOfThree( 9 ) ).toBeTruthy();
    } );

    it( '45', () => {
        expect( isPowerOfThree( 45 ) ).toBeFalsy();
    } );

    it( '3', () => {
        expect( isPowerOfThree( 3 ) ).toBeTruthy();
    } );

    it( '243', () => {
        expect( isPowerOfThree( 243 ) ).toBeTruthy();
    } );
} );