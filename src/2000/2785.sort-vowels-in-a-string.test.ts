function sortVowels( s: string ): string {
    const vowels = new Set( 'aeiouAEIOU'.split( '' ) );
    const map = Array( 58 ).fill( 0 );

    for ( const char of s ) {
        if ( !vowels.has( char ) ) continue;
        const idx = char.charCodeAt( 0 ) - 65;
        map[idx]++;
    }

    const ret = s.split( '' );

    let idx = 0;

    for ( let i = 0; i < ret.length; i++ ) {
        if ( !vowels.has( ret[i] ) ) continue;

        while ( map[idx] === 0 ) idx++;
        ret[i] = String.fromCharCode( idx + 65 );
        map[idx]--;
    }

    return ret.join( '' );
}

describe( '2785. Sort Vowels in a String', () => {
    it( 'case 1', () => {
        expect( sortVowels( 'lEetcOde' ) ).toBe( 'lEOtcede' );
    } );

    it( 'case 2', () => {
        expect( sortVowels( 'lYmpH' ) ).toBe( 'lYmpH' );
    } );
} );
