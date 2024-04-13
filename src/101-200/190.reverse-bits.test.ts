function reverseBits( n: number ): number {
	let rev = 0;
    for ( let i = 0; i < 32 && n > 0; ++i ) {
        rev |= ( n & 1 ) << ( 31 - i );
        n >>>= 1;
    }
    return rev >>> 0;
}

describe( '190. reverse-bits', () => {
    it( '00000010100101000001111010011100', () => {
        expect( reverseBits( 0b00000010100101000001111010011100 ) ).toBe( 964176192 );
    } );

    it( '11111111111111111111111111111101', () => {
        expect( reverseBits( 0b11111111111111111111111111111101 ) ).toBe( 3221225471 );
    } );

} );