function percentageLetter( s: string, letter: string ): number {
    const letterCount = s.split( '' ).filter( ( c ) => c === letter ).length;
    return Math.floor( ( letterCount / s.length ) * 100 );
}

describe( '2278. percentage of letter in string', () => {
    it( 'case 1', () => {
        expect( percentageLetter( 'foobar', 'o' ) ).toBe( 33 );
    } );

    it( 'case 2', () => {
        expect( percentageLetter( 'jjjj', 'k' ) ).toBe( 0 );
    } );
    it( 'case 3', () => {
        expect( percentageLetter( 'jjjj', 'j' ) ).toBe( 100 );
    } );
} );
