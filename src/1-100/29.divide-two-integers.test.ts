/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
function divide( dividend: number, divisor: number ): number {
    if ( dividend === -2147483648 && divisor === -1 ) {
        return 2147483647;
    }

    if ( dividend === 0 ) {
        return 0;
    }

    const negative = Math.sign( divisor ) !== Math.sign( dividend );

    [dividend, divisor] = [Math.abs( dividend ), Math.abs( divisor )];

    let ret = 0;

    while ( dividend >= divisor ) {
        let temp = divisor,
            mul = 1;
        while ( temp << 1 > 0 && dividend >= temp << 1 ) {
            ( temp <<= 1 ), ( mul <<= 1 );
        }
        dividend -= temp;
        ret += mul;
    }
    return negative ? -ret : ret;
}
// @lc code=end

describe( 'Divide Two Integers', () => {
    it( '-2147483648/2', () => {
        expect( divide( -2147483648, 2 ) ).toBe( -1073741824 );
    } );

    it( '-2147483648/-1', () => {
        expect( divide( -2147483648, -1 ) ).toBe( 2147483647 );
    } );

    it( '-2147483648/-2147483648', () => {
        expect( divide( -2147483648, -2147483648 ) ).toBe( 1 );
    } );

    it( '2147483647/2', () => {
        expect( divide( 2147483647, 2 ) ).toBe( 1073741823 );
    } );

    it( '10/3', () => {
        expect( divide( 10, 3 ) ).toBe( 3 );
    } );

    it( '7/-3', () => {
        expect( divide( 7, -3 ) ).toBe( -2 );
    } );

    it( '0/1', () => {
        expect( divide( 0, 1 ) ).toBe( 0 );
    } );

    it( '1/1', () => {
        expect( divide( 1, 1 ) ).toBe( 1 );
    } );
} );
