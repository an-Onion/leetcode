function hasIncreasingSubarrays( nums: number[], k: number ): boolean {
    let cnt = 1,
        preCnt = 0;

    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[i] > nums[i - 1] ) {
            cnt++;
        } else {
            preCnt = cnt;
            cnt = 1;
        }
        if ( cnt >= 2 * k || ( cnt >= k && preCnt >= k ) ) {
            return true;
        }
    }
    return false;
}

describe( '3349. Adjacent Increasing Subarrays Detection I', () => {
    it( 'case 1', () => {
        const nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1],
            k = 3;
        expect( hasIncreasingSubarrays( nums, k ) ).toBe( true );
    } );

    it( 'case 2', () => {
        const nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7],
            k = 5;
        expect( hasIncreasingSubarrays( nums, k ) ).toBe( false );
    } );
} );
