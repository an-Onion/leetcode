function similarPairs( words: string[] ): number {
    const map = new Map<number, number>();

    for ( const word of words ) {
        const count = countAlphabet( word );
        const prev = map.get( count ) || 0;
        map.set( count, prev + 1 );
    }

    let ret = 0;

    for ( const [, count] of map ) {
        ret += ( count * ( count - 1 ) ) / 2;
    }
    return ret;

    function countAlphabet( str: string ): number {
        let count = 0;
        for ( let i = 0; i < str.length; i++ ) {
            count |= 1 << ( str.charCodeAt( i ) - 97 );
        }
        return count;
    }
}

describe( '2506. Count Pairs Of Similar Strings', () => {
    it( 'case 1', () => {
        expect( similarPairs( ['aba', 'aabb', 'abcd', 'bac', 'aabc'] ) ).toEqual( 2 );
    } );

    it( 'case 2', () => {
        expect( similarPairs( ['aabb', 'ab', 'ba'] ) ).toEqual( 3 );
    } );

    it( 'case 3', () => {
        expect( similarPairs( ['nba', 'cba', 'dba'] ) ).toEqual( 0 );
    } );
} );
