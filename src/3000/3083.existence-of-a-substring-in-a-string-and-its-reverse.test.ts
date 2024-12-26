function isSubstringPresent( s: string ): boolean {
    const hash = Array( 26 ).fill( 0 );

    for ( let i = 0; i + 1 < s.length; i++ ) {
        const x = s.charCodeAt( i ) - 97;
        const y = s.charCodeAt( i + 1 ) - 97;
        hash[x] |= 1 << y;
        if ( ( hash[y] >> x ) & 1 ) {
            return true;
        }
    }
    return false;
}

describe( '3083. Existence of a Substring in a String and its Reverse', () => {
    it( 'test case 1', () => {
        const s = 'leetcode';
        expect( isSubstringPresent( s ) ).toBeTruthy();
    } );

    it( 'test case 2', () => {
        const s = 'abcba';
        expect( isSubstringPresent( s ) ).toBeTruthy();
    } );

    it( 'test case 3', () => {
        const s = 'abcd';
        expect( isSubstringPresent( s ) ).toBeFalsy();
    } );
} );
