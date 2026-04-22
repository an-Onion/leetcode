function twoEditWords( queries: string[], dictionary: string[] ): string[] {
    const ret = [];
    for ( const q of queries ) {
        for ( const s of dictionary ) {
            let cnt = 0;
            for ( let i = 0; i < s.length && cnt <= 2; i++ ) {
                if ( q[i] !== s[i] ) {
                    cnt++;
                }
            }
            if ( cnt <= 2 ) {
                ret.push( q );
                break;
            }
        }
    }
    return ret;
}

describe( '2452. words-within-two-edits-of-dictionary', () => {
    it( 'case 1', () => {
        const queries = ['word', 'note', 'ants', 'wood'],
            dictionary = ['wood', 'joke', 'moat'];

        expect( twoEditWords( queries, dictionary ) ).toEqual( [
            'word',
            'note',
            'wood',
        ] );
    } );

    it( 'case 2', () => {
        const queries = ['yes'],
            dictionary = ['not'];

        expect( twoEditWords( queries, dictionary ) ).toEqual( [] );
    } );
} );
