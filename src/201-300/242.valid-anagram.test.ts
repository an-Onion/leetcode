function isAnagram( s: string, t: string ): boolean {

    const map = Array( 26 ).fill( 0 );

    if( s.length !== t.length ) return false;

    for( let i = 0; i < s.length; i++ ){
        map[ s.charCodeAt( i ) - 97 ]++;
        map[ t.charCodeAt( i ) - 97 ]--;
    }

    return !map.filter( v => v !== 0 ).length;
}

describe( '242. valid anagram', () => {

    it( 's = "anagram", t = "nagaram"', () => {
        expect( isAnagram( 'anagram', 'nagaram' ) ).toBeTruthy();
    } );

    it( 's = "rat", t = "car"', () => {
        expect( isAnagram( 'rat', 'car' ) ).toBeFalsy();
    } );
} );