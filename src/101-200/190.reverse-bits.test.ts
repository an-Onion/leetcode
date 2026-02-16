function reverseBits( n: number ): number {
    const M1 = 0b01010101010101010101010101010101;
    const M2 = 0b00110011001100110011001100110011;
    const M4 = 0b00001111000011110000111100001111;
    const M8 = 0b00000000111111110000000011111111;

    let ret: number = n;

    ret = ( ( ret >>> 1 ) & M1 ) | ( ( ret & M1 ) << 1 );
    ret = ( ( ret >>> 2 ) & M2 ) | ( ( ret & M2 ) << 2 );
    ret = ( ( ret >>> 4 ) & M4 ) | ( ( ret & M4 ) << 4 );
    ret = ( ( ret >>> 8 ) & M8 ) | ( ( ret & M8 ) << 8 );

    return ( ( ret >>> 16 ) | ( ret << 16 ) ) >>> 0;
}

describe( '190. reverse-bits', () => {
    it( 'case 1', () => {
        expect( reverseBits( 43261596 ) ).toBe( 964176192 );
    } );

    it( 'case 2', () => {
        expect( reverseBits( 2147483644 ) ).toBe( 1073741822 );
    } );
} );
