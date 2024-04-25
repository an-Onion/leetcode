function isPowerOfTwo( n: number ): boolean {
    if( n <= 0 ) return false;
    return ( n & n-1 ) === 0;
}

describe( '231. power of two', () => {
    it( 'n = 1', () => {
        expect( isPowerOfTwo( 1 ) ).toBeTruthy();
    } );
    it( 'n = 16', () => {
        expect( isPowerOfTwo( 16 ) ).toBeTruthy();
    } );

    it( 'n = 0', () => {
        expect( isPowerOfTwo( 0 ) ).toBeFalsy();
    } );
} );