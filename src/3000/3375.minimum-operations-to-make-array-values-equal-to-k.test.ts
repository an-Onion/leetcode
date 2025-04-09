function minOperations( nums: number[], k: number ): number {
    const set = new Set<number>();

    for ( const num of nums ) {
        if ( num < k ) return -1;

        if ( num > k ) set.add( num );
    }
    return set.size;
}

describe( '3375. minOperations', () => {
    it( 'case 1', () => {
        expect( minOperations( [5, 2, 5, 4, 5], 2 ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        expect( minOperations( [2, 1, 2], 2 ) ).toBe( -1 );
    } );
} );
