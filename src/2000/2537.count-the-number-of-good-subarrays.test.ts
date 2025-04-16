function countGood( nums: number[], k: number ): number {
    const n = nums.length;
    let same = 0,
        right = -1;
    const count = new Map<number, number>();
    let ret = 0;
    for ( let left = 0; left < n; ++left ) {
        while ( same < k && right + 1 < n ) {
            ++right;
            same += count.get( nums[right] ) || 0;
            count.set( nums[right], ( count.get( nums[right] ) || 0 ) + 1 );
        }
        if ( same >= k ) {
            ret += n - right;
        }
        count.set( nums[left], ( count.get( nums[left] ) || 0 ) - 1 );
        same -= count.get( nums[left] ) || 0;
    }
    return ret;
}

describe( '2537. count the number of good subarrays', () => {
    it( 'case 1', () => {
        expect( countGood( [1, 1, 1, 1, 1], 10 ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        expect( countGood( [3, 1, 4, 3, 2, 2, 4], 2 ) ).toBe( 4 );
    } );
} );
