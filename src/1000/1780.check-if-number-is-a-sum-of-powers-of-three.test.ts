function checkPowersOfThree( n: number ): boolean {
    while ( n ) {
        if ( n % 3 === 2 ) {
            return false;
        }
        n = Math.floor( n / 3 );
    }
    return true;
}

describe( '1780. Check if Number is a Sum of Powers of Three', () => {
    it( 'case 1', () => {
        expect( checkPowersOfThree( 12 ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( checkPowersOfThree( 91 ) ).toBe( true );
    } );

    it( 'case 3', () => {
        expect( checkPowersOfThree( 21 ) ).toBe( false );
    } );
} );
