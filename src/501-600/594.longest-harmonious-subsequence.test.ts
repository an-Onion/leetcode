function findLHS( nums: number[] ): number {
    const map = new Map<number, number>();
    for ( const num of nums ) {
        const prev = map.get( num ) ?? 0;
        map.set( num, prev + 1 );
    }

    let ret = 0;
    for ( const key of map.keys() ) {
        if ( !map.has( key + 1 ) ) continue;
        ret = Math.max( ret, map.get( key ) + map.get( key + 1 ) );
    }
    return ret;
}

describe( '594. longest-harmonious-subsequence', () => {
    it( 'case 1', () => {
        expect( findLHS( [1, 3, 2, 2, 5, 2, 3, 7] ) ).toBe( 5 );
    } );

    it( 'case 2', () => {
        expect( findLHS( [1, 2, 3, 4] ) ).toBe( 2 );
    } );

    it( 'case 3', () => {
        expect( findLHS( [1, 1, 1, 1] ) ).toBe( 0 );
    } );
} );
