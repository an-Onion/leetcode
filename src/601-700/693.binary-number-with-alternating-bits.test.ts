function hasAlternatingBits( n: number ): boolean {
    const oxr = n ^ ( n >> 1 );
    return ( oxr & ( oxr + 1 ) ) === 0;
}

describe( '693. Binary Number with Alternating Bits', () => {
    it( 'case 1', () => {
        expect( hasAlternatingBits( 5 ) ).toBe( true );
    } );

    it( 'case 2', () => {
        expect( hasAlternatingBits( 7 ) ).toBe( false );
    } );

    it( 'case 3', () => {
        expect( hasAlternatingBits( 11 ) ).toBe( false );
    } );
} );
