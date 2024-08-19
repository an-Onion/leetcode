function longestPalindrome( s: string ): number {
    const map = new Map<string, number>();

    for ( const c of s ) {
        map.set( c, ( map.get( c ) ?? 0 ) + 1 );
    }

    let odd = false,
        ret = 0;
    for ( const [, v] of map ) {
        if ( v % 2 === 1 ) odd = true;
        ret += ( v >> 1 ) << 1;
    }
    if ( odd ) ret++;
    return ret;
}

describe( '409. Longest Palindrome', () => {
    it( 'should work', () => {
        expect( longestPalindrome( 'abccccdd' ) ).toBe( 7 );
        expect( longestPalindrome( 'a' ) ).toBe( 1 );
        expect( longestPalindrome( 'bb' ) ).toBe( 2 );
    } );
} );
