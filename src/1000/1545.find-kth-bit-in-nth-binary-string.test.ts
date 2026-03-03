function findKthBit( n: number, k: number ): string {
    if ( k % 2 ) {
        return ( ( k - 1 ) / 2 ) % 2 ? '1' : '0';
    }
    k /= k & -k; // remove trailing zeros
    return ( ( k - 1 ) / 2 ) % 2 ? '0' : '1';
}

describe( '1545. Find Kth Bit in Nth Binary String', () => {
    it( 'case 1', () => {
        expect( findKthBit( 3, 1 ) ).toBe( '0' );
    } );

    it( 'case 2', () => {
        expect( findKthBit( 4, 11 ) ).toBe( '1' );
    } );

    it( 'case 3', () => {
        expect( findKthBit( 1, 1 ) ).toBe( '0' );
    } );

    it( 'case 4', () => {
        expect( findKthBit( 2, 3 ) ).toBe( '1' );
    } );
} );
