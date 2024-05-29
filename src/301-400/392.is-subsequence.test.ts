function isSubsequence( s: string, t: string ): boolean {

    let sIndex = 0, tIndex = 0;

    while ( sIndex < s.length && tIndex < t.length ) {
        if ( s[ sIndex ] === t[ tIndex ] ) {
            sIndex++;
        }
        tIndex++;
    }
    return sIndex === s.length;
}

describe( '392. is-subsequence', () => {
    it( 's = "abc", t = "ahbgdc"', () => {
        expect( isSubsequence( 'abc', 'ahbgdc' ) ).toBeTruthy( );
    } );

    it( 's = "axc", t = "ahbgdc"', () => {
        expect( isSubsequence( 'axc', 'ahbgdc' ) ).toBeFalsy( );
    } );
} );