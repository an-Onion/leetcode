function rotateString( s: string, goal: string ): boolean {
    return s.length === goal.length && ( s + s ).includes( goal );
}

describe( '796. Rotate String', () => {
    it( 'case 1', () => {
        expect( rotateString( 'abcde', 'cdeab' ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( rotateString( 'abcde', 'abced' ) ).toBe( false );
    } );
} );
