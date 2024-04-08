function fractionToDecimal( numerator: number, denominator: number ): string {
    const ret = [];
    if( numerator * denominator  < 0 ) {
        ret.push( '-' );
    }
    numerator = Math.abs( numerator );
    denominator = Math.abs( denominator );
    ret.push( Math.floor( numerator / denominator ) );
    let remainder = numerator % denominator;

    if( remainder !== 0 ) ret.push( '.' );

    const map = new Map<number, number>();
    while( remainder ) {
        const idx = ret.length;
        if( map.has( remainder ) ){
            ret.splice( map.get( remainder )!, 0, '(' );
            ret.push( ')' );
            break;
        }
        map.set( remainder, idx );
        remainder *= 10;
        ret.push( remainder / denominator | 0 );
        remainder %= denominator;
    }
    return ret.join( '' );
}

describe( '166. fraction-to-recurring-decimal', () => {

    it( '[0, -5]', () => {
        expect( fractionToDecimal( 0, -5 ) ).toBe( '0' );
    } );

    it( '[-2147483648, 1]', () => {
        expect( fractionToDecimal( -2147483648, 1 ) ).toBe( '-2147483648' );
    } );

    it( '[-50, 8]', () => {
        expect( fractionToDecimal( -50, 8 ) ).toBe( '-6.25' );
    } );

    it( '[1,2]', () => {
        expect( fractionToDecimal( 1, 2 ) ).toBe( '0.5' );
    } );

    it( '[2,1]', () => {
        expect( fractionToDecimal( 2, 1 ) ).toBe( '2' );
    } );

    it( '[2,3]', () => {
        expect( fractionToDecimal( 2, 3 ) ).toBe( '0.(6)' );
    } );


    it( '[4,333]', () => {
        expect( fractionToDecimal( 4, 333 ) ).toBe( '0.(012)' );
    } );
} );