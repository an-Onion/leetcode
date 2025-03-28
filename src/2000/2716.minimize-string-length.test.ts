function minimizedStringLength( s: string ): number {
    const set = new Set<string>( s );
    return set.size;
}

describe( '2716.minimize-string-length', () => {
    it( 'case 1', () => {
        expect( minimizedStringLength( 'aaabc' ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        expect( minimizedStringLength( 'cbbd' ) ).toBe( 3 );
    } );
    it( 'case 3', () => {
        expect( minimizedStringLength( 'baadccab' ) ).toBe( 4 );
    } );
} );
