function trailingZeroes( n: number ): number {

    let five = 5, ret = 0;

    while( n / five >= 1 ){
        ret += Math.floor( n / five );
        five *= 5;
    }
    return ret;
}

describe( '172. factorial-trailing-zeroes', () => {

    it( '25', () => {
        expect( trailingZeroes( 25 ) ).toBe( 6 );
    } );

    it( '3', () => {
        expect( trailingZeroes( 3 ) ).toBe( 0 );
    } );

    it( '5', () => {
        expect( trailingZeroes( 5 ) ).toBe( 1 );
    } );

    it( '0', () => {
        expect( trailingZeroes( 0 ) ).toBe( 0 );
    } );
} );