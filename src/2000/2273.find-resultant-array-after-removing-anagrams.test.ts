function removeAnagrams( words: string[] ): string[] {
    const ret: string[] = [words[0]];

    for ( let i = 1; i < words.length; i++ ) {
        if ( !compare( ret[ret.length - 1], words[i] ) ) {
            ret.push( words[i] );
        }
    }

    return ret;

    function compare( a: string, b: string ): boolean {
        const freq = Array( 26 ).fill( 0 );
        for ( const char of a ) {
            freq[char.charCodeAt( 0 ) - 97]++;
        }
        for ( const char of b ) {
            freq[char.charCodeAt( 0 ) - 97]--;
        }
        return freq.every( ( v ) => v === 0 );
    }
}

describe( '2273. Find Resultant Array After Removing Anagrams', () => {
    it( 'case 1', () => {
        const words = ['abba', 'baba', 'bbaa', 'cd', 'cd'];
        expect( removeAnagrams( words ) ).toEqual( ['abba', 'cd'] );
    } );

    it( 'case 2', () => {
        const words = ['a', 'b', 'c', 'd', 'e'];
        expect( removeAnagrams( words ) ).toEqual( ['a', 'b', 'c', 'd', 'e'] );
    } );
} );
