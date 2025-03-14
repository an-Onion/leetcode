function isBalanced( num: string ): boolean {
    let ret = 0;
    for ( let i = 0; i < num.length; i++ ) {
        if ( i % 2 === 0 ) ret += Number( num[i] );
        else ret -= Number( num[i] );
    }
    return ret === 0;
}

describe( '3340.check-balanced-string', () => {
    it( 'case 1', () => {
        expect( isBalanced( '1234' ) ).toBe( false );
    } );

    it( 'case 2', () => {
        expect( isBalanced( '24123' ) ).toBe( true );
    } );
} );
