function doesAliceWin( s: string ): boolean {
    const vowels = 'aeiou';
    return vowels.split( '' ).some( ( v ) => s.includes( v ) );
}

describe( '3227. Vowels Game in a String', () => {
    it( 'case 1', () => {
        expect( doesAliceWin( 'leetcoder' ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( doesAliceWin( 'bbcd' ) ).toBe( false );
    } );
} );
