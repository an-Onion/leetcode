function topKFrequent( nums: number[], k: number ): number[] {
    const countMap: Map<number, number> = new Map();
    for ( const num of nums ) {
        countMap.set( num, ( countMap.get( num ) || 0 ) + 1 );
    }
    return [...countMap.entries()]
        .sort( ( a, b ) => b[1] - a[1] )
        .slice( 0, k )
        .map( ( [k] ) => k );
}

describe( '347. top k frequent elements', () => {

    it( 'case 1', () => {
        const nums = [1,1,1,2,2,3];
        const k = 2;
        const result = topKFrequent( nums, k );
        expect( result ).toEqual( [1,2] );
    } );

    it( 'case 2', () => {
        const nums = [1];
        const k = 1;
        const result = topKFrequent( nums, k );
        expect( result ).toEqual( [1] );
    } );
} );
