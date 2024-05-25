function reverseVowels( s: string ): string {

    const sa = s.split( '' );

    const isVowel = c => /[aeiou]/i.test( c );

    let [l, r] = [0, s.length - 1];

    while ( l < r ) {
        if ( !isVowel( sa[l] ) ) {
            l++; continue;
        }

        if ( !isVowel( sa[r] ) ) {
            r--; continue;
        }
        [sa[l], sa[r]] = [sa[r], sa[l]];
        l++, r--;
    }

    return sa.join( '' );
}

describe( '345. reverse-vowels-of-a-string', () => {
    it( 'hello', () => {
        expect( reverseVowels( 'hello' ) ).toBe( 'holle' );
    } );

    it( 'leetcode', () => {
        expect( reverseVowels( 'leetcode' ) ).toBe( 'leotcede' );
    } );
} );