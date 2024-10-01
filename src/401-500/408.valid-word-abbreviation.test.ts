function validWordAbbreviation( word: string, abbr: string ): boolean {
    let i = 0,
        j = 0;

    while ( i < word.length && j < abbr.length ) {
        if ( !isNumber( abbr[j] ) ) {
            if ( word[i] !== abbr[j] ) return false;
            i++, j++;
            continue;
        }
        if ( abbr[j] === '0' ) return false;
        let digit = '';
        while ( j < abbr.length && isNumber( abbr[j] ) ) {
            digit += abbr[j++];
        }
        i += parseInt( digit, 10 );
    }
    return j === abbr.length && i === word.length;

    function isNumber( c: string ) {
        return c >= '0' && c <= '9';
    }
}

describe( '408. Valid Word Abbreviation', () => {
    it( 'e.g. 1', () => {
        expect( validWordAbbreviation( 'internationalization', 'i12iz4n' ) ).toBe(
            true,
        );
        expect( validWordAbbreviation( 'apple', 'a2e' ) ).toBe( false );
    } );
} );
