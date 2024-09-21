function shortestDistance(
    wordsDict: string[],
    word1: string,
    word2: string,
): number {
    let idx1 = -1,
        idx2 = -1;
    let ret = Infinity;
    for ( let i = 0; i < wordsDict.length; i++ ) {
        if ( wordsDict[i] === word1 ) idx1 = i;
        if ( wordsDict[i] === word2 ) idx2 = i;

        if ( idx1 !== -1 && idx2 !== -1 ) {
            ret = Math.min( ret, Math.abs( idx1 - idx2 ) );
        }
    }
    return ret;
}

describe( '243. Shortest Word Distance', () => {
    it( 'e.g. 1', () => {
        expect(
            shortestDistance(
                ['practice', 'makes', 'perfect', 'coding', 'makes'],
                'coding',
                'practice',
            ),
        ).toBe( 3 );
    } );

    it( 'e.g. 2', () => {
        expect(
            shortestDistance(
                ['practice', 'makes', 'perfect', 'coding', 'makes'],
                'makes',
                'coding',
            ),
        ).toBe( 1 );
    } );
} );
