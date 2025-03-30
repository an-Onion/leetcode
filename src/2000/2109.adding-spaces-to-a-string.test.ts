function addSpaces( s: string, spaces: number[] ): string {
    const ret = [];
    for ( let i = 0, j = 0; i < s.length; i++ ) {
        if ( i === spaces[j] ) {
            ret.push( ' ' );
            j++;
        }
        ret.push( s[i] );
    }
    return ret.join( '' );
}

describe( '2109. Adding Spaces to a String', () => {
    it( 'case 1', () => {
        expect( addSpaces( 'LeetcodeHelpsMeLearn', [8, 13, 15] ) ).toBe(
            'Leetcode Helps Me Learn',
        );
    } );
    it( 'case 2', () => {
        expect( addSpaces( 'icodeinpython', [1, 5, 7, 9] ) ).toBe(
            'i code in py thon',
        );
    } );
    it( 'case 3', () => {
        expect( addSpaces( 'spacing', [0, 1, 2, 3, 4, 5, 6] ) ).toBe(
            ' s p a c i n g',
        );
    } );
} );
