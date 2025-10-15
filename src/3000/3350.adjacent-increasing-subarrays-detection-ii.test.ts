function maxIncreasingSubarrays( nums: number[] ): number {
    let max = 0,
        cnt = 1,
        preCnt = 0;

    for ( let i = 1; i < nums.length; ++i ) {
        if ( nums[i] > nums[i - 1] ) {
            ++cnt;
        } else {
            preCnt = cnt;
            cnt = 1;
        }
        max = Math.max( max, Math.min( preCnt, cnt ), cnt >> 1 );
    }
    return max;
}

describe( '3350. Adjacent Increasing Subarrays Detection II', () => {
    it( 'case 1', () => {
        const nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
        expect( maxIncreasingSubarrays( nums ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        const nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
        expect( maxIncreasingSubarrays( nums ) ).toBe( 2 );
    } );
} );
