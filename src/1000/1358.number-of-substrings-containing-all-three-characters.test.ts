function numberOfSubstrings( s: string ): number {
    let a = -1,
        b = -1,
        c = -1,
        ret = 0;

    for ( let i = 0; i < s.length; i++ ) {
        if ( s[i] === 'a' ) {
            a = i;
            ret += Math.min( b, c ) + 1;
        } else if ( s[i] === 'b' ) {
            b = i;
            ret += Math.min( a, c ) + 1;
        } else if ( s[i] === 'c' ) {
            c = i;
            ret += Math.min( a, b ) + 1;
        }
    }
    return ret;
}

describe( '1358.number-of-substrings-containing-all-three-characters', () => {
    it( 'case 1', () => {
        expect( numberOfSubstrings( 'abcabc' ) ).toBe( 10 );
    } );

    it( 'case 2', () => {
        expect( numberOfSubstrings( 'aaacb' ) ).toBe( 3 );
    } );

    it( 'case 3', () => {
        expect( numberOfSubstrings( 'abc' ) ).toBe( 1 );
    } );
} );
