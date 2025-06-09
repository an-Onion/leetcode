function defangIPaddr( address: string ): string {
    return address.replaceAll( '.', '[.]' );
}

describe( '1108. defanging an ip address', () => {
    it( 'case 1', () => {
        expect( defangIPaddr( '1.1.1.1' ) ).toBe( '1[.]1[.]1[.]1' );
    } );
    it( 'case 2', () => {
        expect( defangIPaddr( '255.100.50.0' ) ).toBe( '255[.]100[.]50[.]0' );
    } );
} );
