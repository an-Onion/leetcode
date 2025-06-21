function minimumDeletions( word: string, k: number ): number {
    const cnt = new Map<string, number>();
    for ( const ch of word ) {
        cnt.set( ch, ( cnt.get( ch ) || 0 ) + 1 );
    }
    let res = word.length;
    for ( const a of cnt.values() ) {
        let deleted = 0;
        for ( const b of cnt.values() ) {
            if ( a > b ) {
                deleted += b;
            } else if ( b > a + k ) {
                deleted += b - ( a + k );
            }
        }
        res = Math.min( res, deleted );
    }
    return res;
}

describe( '3085. Minimum Deletions to Make String K Special', () => {
    it( 'case 1', () => {
        expect( minimumDeletions( 'aabcaba', 0 ) ).toBe( 3 );
    } );
    it( 'case 2', () => {
        expect( minimumDeletions( 'dabdcbdcdcd', 2 ) ).toBe( 2 );
    } );
    it( 'case 3', () => {
        expect( minimumDeletions( 'aaabaaa', 2 ) ).toBe( 1 );
    } );
} );
