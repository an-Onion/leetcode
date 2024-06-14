function canConstruct( ransomNote: string, magazine: string ): boolean {

    const map = Array( 26 ).fill( 0 );

    for ( const char of magazine ) {
        map[ char.charCodeAt( 0 ) - 97 ]++;
    }

    for ( const char of ransomNote ) {
        const index = char.charCodeAt( 0 ) - 97;
        map[ index ]--;
        if ( map[ index ] < 0 ) {
            return false;
        }
    }
    return true;
}

describe( '383. ransom-note', () => {
    it( 'a,b', () => {
        expect( canConstruct( 'a', 'b' ) ).toBeFalsy();
    } );

    it( 'aa,ab', () => {
        expect( canConstruct( 'aa', 'ab' ) ).toBeFalsy();
    } );

    it( 'aa,aab', () => {
        expect( canConstruct( 'aa', 'aab' ) ).toBeTruthy();
    } );
} );
