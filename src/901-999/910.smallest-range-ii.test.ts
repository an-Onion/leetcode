function smallestRangeII( nums: number[], k: number ): number {
    const N = nums.length;
    nums.sort( ( a, b ) => a - b );
    let ans = nums[N - 1] - nums[0];

    for ( let i = 1; i < N; ++i ) {
        const max = Math.max( nums[N - 1] - k, nums[i - 1] + k );
        const min = Math.min( nums[0] + k, nums[i] - k );
        ans = Math.min( ans, max - min );
    }
    return ans;
}

describe( '910. Smallest range II', () => {
    it( 'e.g. 1', () => {
        const nums = [1],
            k = 0;
        expect( smallestRangeII( nums, k ) ).toBe( 0 );
    } );

    it( 'e.g. 2', () => {
        const nums = [0, 10],
            k = 2;
        expect( smallestRangeII( nums, k ) ).toBe( 6 );
    } );

    it( 'e.g. 3', () => {
        const nums = [1, 3, 6],
            k = 3;
        expect( smallestRangeII( nums, k ) ).toBe( 3 );
    } );
} );
