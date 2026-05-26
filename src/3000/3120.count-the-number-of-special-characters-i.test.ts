function numberOfSpecialChars( word: string ): number {
    const s = new Set( word );
    let cnt = 0;
    for ( let i = 0; i < 26; i++ ) {
        const low = String.fromCharCode( 97 + i );
        const up = String.fromCharCode( 65 + i );
        if ( s.has( low ) && s.has( up ) ) {
            cnt++;
        }
    }
    return cnt;
}

describe( '3120. count-the-number-of-special-characters-i', () => {
    it( 'case 1', () => {
        expect( numberOfSpecialChars( 'aaAbcBC' ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( numberOfSpecialChars( 'abc' ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        expect( numberOfSpecialChars( 'abBCab' ) ).toBe( 1 );
    } );
} );
