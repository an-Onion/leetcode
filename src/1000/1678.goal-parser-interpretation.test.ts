function interpret( command: string ): string {
    return command.replaceAll( '(', '' ).replaceAll( ')', 'al' );
}

describe( '1678. Goal Parser Interpretation', () => {
    it( 'case 1', () => {
        const command = 'G()(al)';
        expect( interpret( command ) ).toBe( 'Goal' );
    } );

    it( 'case 2', () => {
        const command = 'G()()()()(al)';
        expect( interpret( command ) ).toBe( 'Gooooal' );
    } );

    it( 'case 3', () => {
        const command = '(al)G(al)()()G';
        expect( interpret( command ) ).toBe( 'alGalooG' );
    } );
} );
