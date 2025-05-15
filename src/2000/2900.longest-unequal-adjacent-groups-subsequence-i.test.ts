function getLongestSubsequence( words: string[], groups: number[] ): string[] {
    const ret = [];
    let prevGroup = -1;

    for ( let i = 0; i < words.length; i++ ) {
        if ( groups[i] !== prevGroup ) {
            ret.push( words[i] );
            prevGroup = groups[i];
        }
    }
    return ret;
}

describe( '2900. longest-unequal-adjacent-groups-subsequence-i', () => {
    it( 'case 1', () => {
        const words = ['e', 'a', 'b'],
            groups = [0, 0, 1];
        expect( getLongestSubsequence( words, groups ) ).toEqual( ['e', 'b'] );
    } );
    it( 'case 2', () => {
        const words = ['a', 'b', 'c', 'd'],
            groups = [1, 0, 1, 1];
        expect( getLongestSubsequence( words, groups ) ).toEqual( ['a', 'b', 'c'] );
    } );
} );
