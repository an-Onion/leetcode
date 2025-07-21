function makeFancyString( s: string ): string {
    return s.replace( /(.)\1{2,}/g, '$1$1' );
}

describe( '1957. delete-characters-to-make-fancy-string', () => {
    it( 'case 1', () => {
        expect( makeFancyString( 'leeetcode' ) ).toBe( 'leetcode' );
    } );
    it( 'case 2', () => {
        expect( makeFancyString( 'aaabaaaa' ) ).toBe( 'aabaa' );
    } );
    it( 'case 3', () => {
        expect( makeFancyString( 'aab' ) ).toBe( 'aab' );
    } );
} );
