function hasSameDigits( s: string ): boolean {
    const digits = s.split( '' ).map( Number );
    for ( let len = digits.length - 2; len >= 1; len-- ) {
        for ( let i = 0; i <= len; i++ ) {
            digits[i] = ( digits[i] + digits[i + 1] ) % 10;
        }
    }
    return digits[0] === digits[1];
}

describe( '3461. check-if-digits-are-equal-in-string-after-operations-i', () => {
    it( 'case 1', () => {
        expect( hasSameDigits( '3902' ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( hasSameDigits( '34789' ) ).toBe( false );
    } );
} );
