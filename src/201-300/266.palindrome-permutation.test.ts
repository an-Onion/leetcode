function canPermutePalindrome( s: string ): boolean {
    const set: Set<string> = new Set();

    for ( const char of s ) {
        if ( set.has( char ) ) {
            set.delete( char );
            continue;
        }
        set.add( char );
    }
    return set.size <= 1;
}

describe( '266. Palindrome Permutation', () => {
    it( 'example 1', () => {
        // Input: "code"
        // Output: false
        expect( canPermutePalindrome( 'code' ) ).toBe( false );
    } );

    it( 'example 2', () => {
        // Input: "aab"
        // Output: true
        expect( canPermutePalindrome( 'aab' ) ).toBe( true );
    } );

    it( 'example 3', () => {
        // Input: "carerac"
        // Output: true
        expect( canPermutePalindrome( 'carerac' ) ).toBe( true );
    } );
} );
