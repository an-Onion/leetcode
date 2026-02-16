function addBinary( a: string, b: string ): string {
    let x = BigInt( `0b${a}` );
    let y = BigInt( `0b${b}` );
    while ( y ) {
        const sum = x ^ y;
        const carry = ( x & y ) << 1n;
        x = sum;
        y = carry;
    }
    return x.toString( 2 );
}

describe( '67. Add Binary', () => {
    it( '11 + 1', () => {
        expect( addBinary( '11', '1' ) ).toBe( '100' );
    } );

    it( '1010 + 1011', () => {
        expect( addBinary( '1010', '1011' ) ).toBe( '10101' );
    } );
} );
