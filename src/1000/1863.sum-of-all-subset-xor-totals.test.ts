function subsetXORSum( nums: number[] ): number {
    let ret = 0;
    const n = nums.length;
    for ( const num of nums ) {
        ret |= num;
    }
    return ret << ( n - 1 );
}

describe( '1863. sum-of-all-subset-xor-totals', () => {
    it( 'case 1', () => {
        expect( subsetXORSum( [1, 3] ) ).toBe( 6 );
    } );

    it( 'case 2', () => {
        expect( subsetXORSum( [5, 1, 6] ) ).toBe( 28 );
    } );

    it( 'case 3', () => {
        expect( subsetXORSum( [3, 4, 5, 6, 7, 8] ) ).toBe( 480 );
    } );
} );
