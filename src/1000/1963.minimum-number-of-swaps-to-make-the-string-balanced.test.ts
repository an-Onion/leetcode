function minSwaps( s: string ): number {
    let cnt1 = 0,
        swap = 0;

    for ( let left = 0; left < s.length - 1; left++ ) {
        cnt1 += s[left] === '[' ? 1 : -1;
        if ( cnt1 >= 0 ) continue;

        swap++;
        cnt1 += 2;
    }
    return swap;
}

describe( '1963. minimum-number-of-swaps-to-make-the-string-balanced', () => {
    it( 'case 1', () => {
        expect( minSwaps( '][][' ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( minSwaps( ']]][[[' ) ).toBe( 2 );
    } );

    it( 'case 3', () => {
        expect( minSwaps( '[]' ) ).toBe( 0 );
    } );
} );
