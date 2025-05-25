function longestPalindrome( words: string[] ): number {
    const map = Array( 26 )
        .fill( 0 )
        .map( () => Array( 26 ).fill( 0 ) );

    let ret = 0;
    words.forEach( ( [a, b] ) => {
        const idxLeft = a.charCodeAt( 0 ) - 97;
        const idxRight = b.charCodeAt( 0 ) - 97;

        if ( map[idxRight][idxLeft] > 0 ) {
            map[idxRight][idxLeft]--;
            ret += 4;
            return;
        }
        map[idxLeft][idxRight]++;
    } );

    for ( let i = 0; i < 26; i++ ) {
        if ( map[i][i] > 0 ) {
            ret += 2;
            break;
        }
    }

    return ret;
}

describe( '2131. longest palindrome by concatenating two letter words', () => {
    it( 'case 1', () => {
        const words = ['lc', 'cl', 'gg'];
        expect( longestPalindrome( words ) ).toEqual( 6 );
    } );

    it( 'case 2', () => {
        const words = ['ab', 'ty', 'yt', 'lc', 'cl', 'ab'];
        expect( longestPalindrome( words ) ).toEqual( 8 );
    } );
    it( 'case 3', () => {
        const words = ['cc', 'll', 'xx'];
        expect( longestPalindrome( words ) ).toEqual( 2 );
    } );
} );
