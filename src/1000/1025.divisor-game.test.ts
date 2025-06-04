function divisorGame( n: number ): boolean {
    return n % 2 === 0;
}

describe( '1025. divisor game', () => {
    it( 'case 1', () => {
        expect( divisorGame( 2 ) ).toBe( true );
    } );
    it( 'case 2', () => {
        expect( divisorGame( 3 ) ).toBe( false );
    } );
} );
