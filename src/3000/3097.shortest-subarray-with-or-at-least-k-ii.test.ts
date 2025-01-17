function minimumSubarrayLength( nums: number[], k: number ): number {
    let ret = Infinity;

    for ( let i = 0; i < nums.length; i++ ) {
        const cur = nums[i];
        if ( cur >= k ) return 1;

        for ( let j = i - 1; j >= 0 && ( nums[j] | cur ) !== nums[j]; j-- ) {
            nums[j] |= cur;
            if ( nums[j] >= k ) {
                ret = Math.min( ret, i - j + 1 );
            }
        }
    }
    return ret === Infinity ? -1 : ret;
}

describe( '3097. Shortest Subarray with Sum at Least K', () => {
    it( 'case 1', () => {
        const nums = [1, 2, 3],
            k = 2;
        expect( minimumSubarrayLength( nums, k ) ).toBe( 1 );
    } );

    it( 'case 2', () => {
        const nums = [2, 1, 8],
            k = 10;
        expect( minimumSubarrayLength( nums, k ) ).toBe( 3 );
    } );

    it( 'case 3', () => {
        const nums = [1, 2],
            k = 0;
        expect( minimumSubarrayLength( nums, k ) ).toBe( 1 );
    } );
} );
