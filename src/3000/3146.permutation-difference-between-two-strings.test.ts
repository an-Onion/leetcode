function findPermutationDifference( s: string, t: string ): number {
    const map = Array( 26 ).fill( 0 );

    for ( let i = 0; i < s.length; i++ ) {
        map[s.charCodeAt( i ) - 97] = i;
    }

    let ret = 0;

    for ( let i = 0; i < t.length; i++ ) {
        ret += Math.abs( map[t.charCodeAt( i ) - 97] - i );
    }
    return ret;
}

describe( '3146. Permutation Difference Between Two Strings', () => {
    it( 'example 1', () => {
        const s = 'abc',
            t = 'bac';
        expect( findPermutationDifference( s, t ) ).toBe( 2 );
    } );

    it( 'example 2', () => {
        const s = 'abcde',
            t = 'edbac';
        expect( findPermutationDifference( s, t ) ).toBe( 12 );
    } );
} );
