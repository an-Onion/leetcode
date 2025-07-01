function possibleStringCount( word: string ): number {
    let ret = 1;

    for ( let i = 0; i < word.length; i++ ) {
        if ( word[i] === word[i - 1] ) {
            ret++;
        }
    }
    return ret;
}

describe( '3330. find-the-original-typed-string-i', () => {
    it( 'case 1', () => {
        expect( possibleStringCount( 'abbcccc' ) ).toBe( 5 );
    } );
    it( 'case 2', () => {
        expect( possibleStringCount( 'abcd' ) ).toBe( 1 );
    } );
    it( 'case 3', () => {
        expect( possibleStringCount( 'aaaa' ) ).toBe( 4 );
    } );
} );
