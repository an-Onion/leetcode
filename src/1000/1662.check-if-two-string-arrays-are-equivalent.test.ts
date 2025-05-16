function arrayStringsAreEqual( word1: string[], word2: string[] ): boolean {
    return word1.join( '' ) === word2.join( '' );
}

describe( '1662. Check If Two String Arrays are Equivalent', () => {
    it( 'case 1', () => {
        expect( arrayStringsAreEqual( ['ab', 'c'], ['a', 'bc'] ) ).toBe( true );
    } );
    it( 'case 2', () => {
        expect( arrayStringsAreEqual( ['a', 'cb'], ['ab', 'c'] ) ).toBe( false );
    } );
    it( 'case 3', () => {
        expect( arrayStringsAreEqual( ['abc', 'd', 'defg'], ['abcddefg'] ) ).toBe(
            true,
        );
    } );
} );
