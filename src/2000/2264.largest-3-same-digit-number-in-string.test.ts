function largestGoodInteger( num: string ): string {
    let res = '';

    for ( let i = 2; i < num.length; i++ ) {
        if ( num[i] !== num[i - 1] || num[i] !== num[i - 2] ) {
            continue;
        }
        if ( num[i].repeat( 3 ) > res ) {
            res = num[i].repeat( 3 );
        }
    }

    return res;
}

describe( '2264. Largest 3-Digit Number In String', () => {
    it( 'test case 1', () => {
        expect( largestGoodInteger( '6777133339' ) ).toBe( '777' );
    } );

    it( 'test case 2', () => {
        expect( largestGoodInteger( '2300019' ) ).toBe( '000' );
    } );
} );
