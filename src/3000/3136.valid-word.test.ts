const isValid = function ( word ) {
    return /^(?=.*[aeiou])(?=.*[^aeiou0-9])[a-z0-9]{3,}$/i.test( word );
};

describe( '3136. valid-word', () => {
    it( 'case 1', () => {
        expect( isValid( '234Adas' ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( isValid( 'b3' ) ).toBe( false );
    } );

    it( 'case 3', () => {
        expect( isValid( 'a3$e' ) ).toBe( false );
    } );
} );
