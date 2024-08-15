/*
 * @lc app=leetcode id=402 lang=typescript
 *
 * [402] Remove K Digits
 */

// @lc code=start
function removeKdigits( num: string, k: number ): string {
    const mono: string[] = [];

    for ( const c of num ) {
        while ( mono.at( -1 ) > c && k ) {
            k--;
            mono.pop();
        }
        mono.push( c );
    }

    while ( k-- ) mono.pop();

    return mono.join( '' ).replace( /^0+/, '' ) || '0';
}
// @lc code=end

describe( 'Remove K Digits', () => {
    it( 'eg 1', () => {
        const num = '1432219',
            k = 3;
        expect( removeKdigits( num, k ) ).toBe( '1219' );
    } );

    it( 'eg 2', () => {
        const num = '10200',
            k = 1;
        expect( removeKdigits( num, k ) ).toBe( '200' );
    } );

    it( 'eg 3', () => {
        const num = '10',
            k = 2;
        expect( removeKdigits( num, k ) ).toBe( '0' );
    } );

    it( 'eg 4', () => {
        const num = '10',
            k = 1;
        expect( removeKdigits( num, k ) ).toBe( '0' );
    } );

    it( 'eg 5', () => {
        const num = '12',
            k = 1;
        expect( removeKdigits( num, k ) ).toBe( '1' );
    } );
} );
