function numOfStrings( patterns: string[], word: string ): number {
    let count = 0;
    for ( const p of patterns ) {
        if ( word.includes( p ) ) {
            count++;
        }
    }
    return count;
}

describe( '1967.number-of-strings-that-appear-as-substrings-in-word', () => {
    it( 'case 1', () => {
        expect( numOfStrings( ['a', 'abc', 'bc', 'd'], 'abc' ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( numOfStrings( ['a', 'b', 'c'], 'aaaaabbbbb' ) ).toBe( 2 );
    } );
} );
