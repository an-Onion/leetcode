function findWordsContaining( words: string[], x: string ): number[] {
    const ret = [];
    for ( let i = 0; i < words.length; ++i ) {
        if ( words[i].includes( x ) ) {
            ret.push( i );
        }
    }
    return ret;
}

describe( ' 2942. Find Words Containing Character ', () => {
    it( ' case 1', () => {
        const words = ['leet', 'code'],
            x = 'e';
        expect( findWordsContaining( words, x ) ).toEqual( [0, 1] );
    } );
    it( 'case 2', () => {
        const words = ['abc', 'bcd', 'aaaa', 'cbc'],
            x = 'a';
        expect( findWordsContaining( words, x ) ).toEqual( [0, 2] );
    } );
    it( 'case 3', () => {
        const words = ['abc', 'bcd', 'aaaa', 'cbc'],
            x = 'z';
        expect( findWordsContaining( words, x ) ).toEqual( [] );
    } );
} );
