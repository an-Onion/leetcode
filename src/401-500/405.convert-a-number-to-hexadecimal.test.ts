function toHex( num: number ): string {
    const hex = '0123456789abcdef';

    let ret = '';
    for ( let i = 0; i < 8; ++i ) {
        ret = hex[num & 0b1111] + ret;
        num >>= 4;
    }
    return ret.replace( /^0+/, '' ) || '0';
}

describe( '405. Convert a Number to Hexadecimal', () => {
    it( 'e.g.', () => {
        expect( toHex( 26 ) ).toBe( '1a' );
        expect( toHex( -1 ) ).toBe( 'ffffffff' );
    } );
} );
