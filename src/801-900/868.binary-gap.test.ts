function binaryGap( n: number ): number {
    let ret = 0,
        last = -1;

    for ( let i = 0; n !== 0; i++ ) {
        if ( ( n & 1 ) === 1 ) {
            if ( last !== -1 ) {
                ret = Math.max( ret, i - last );
            }
            last = i;
        }
        n >>= 1;
    }
    return ret;
}

describe( '868. binary-gap', () => {
    it( 'case 1', () => {
        expect( binaryGap( 22 ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( binaryGap( 8 ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        expect( binaryGap( 5 ) ).toBe( 2 );
    } );
} );
