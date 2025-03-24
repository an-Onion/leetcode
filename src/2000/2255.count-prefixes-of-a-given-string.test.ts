function countPrefixes( words: string[], s: string ): number {
    return words.filter( ( word ) => s.startsWith( word ) ).length;
}

describe( '2255.count-prefixes-of-a-given-string', () => {
    it( 'case 1', () => {
        expect( countPrefixes( ['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc' ) ).toBe(
            3,
        );
    } );

    it( 'case 2', () => {
        expect( countPrefixes( ['a', 'a'], 'aa' ) ).toBe( 2 );
    } );
} );
