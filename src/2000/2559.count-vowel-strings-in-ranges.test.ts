function vowelStrings( words: string[], queries: number[][] ): number[] {
    const vowels = 'aeiou';
    const sums = Array( words.length + 1 ).fill( 0 );
    for ( let i = 0; i < words.length; i++ ) {
        const element = words[i].split( '' );
        if ( vowels.includes( element.at( 0 ) ) && vowels.includes( element.at( -1 ) ) ) {
            sums[i + 1] = sums[i] + 1;
            continue;
        }
        sums[i + 1] = sums[i];
    }
    const ret = [];
    for ( const [left, right] of queries ) {
        ret.push( sums[right + 1] - sums[left] );
    }
    return ret;
}

describe( '2000. Count Vowel Strings in Ranges', () => {
    it( 'e.g. 1', () => {
        const words = ['aba', 'bcb', 'ece', 'aa', 'e'],
            queries = [
                [0, 2],
                [1, 4],
                [1, 1],
            ];
        expect( vowelStrings( words, queries ) ).toEqual( [2, 3, 0] );
    } );

    it( 'e.g. 2', () => {
        const words = ['a', 'e', 'i'],
            queries = [
                [0, 2],
                [0, 1],
                [2, 2],
            ];
        expect( vowelStrings( words, queries ) ).toEqual( [3, 2, 1] );
    } );
} );
