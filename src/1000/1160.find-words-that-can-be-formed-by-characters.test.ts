function countCharacters( words: string[], chars: string ): number {
    const charsCnt = {};
    for ( const c of chars ) {
        charsCnt[c] = ( charsCnt[c] || 0 ) + 1;
    }

    let ret = 0;

    out: for ( const word of words ) {
        const wordCnt = {};
        for ( const c of word ) {
            wordCnt[c] = ( wordCnt[c] || 0 ) + 1;
        }

        for ( const c of word ) {
            if ( ( charsCnt[c] || 0 ) < ( wordCnt[c] || 0 ) ) {
                continue out;
            }
        }

        ret += word.length;
    }

    return ret;
}

describe( '1160. find-words-that-can-be-formed-by-characters', () => {
    it( 'case 1', () => {
        expect( countCharacters( ['cat', 'bt', 'hat', 'tree'], 'atach' ) ).toBe( 6 );
    } );
    it( 'case 2', () => {
        expect(
            countCharacters( ['hello', 'world', 'leetcode'], 'welldonehoneyr' ),
        ).toBe( 10 );
    } );
} );
