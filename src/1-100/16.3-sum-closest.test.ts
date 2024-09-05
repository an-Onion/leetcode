/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
function threeSumClosest( nums: number[], target: number ): number {
    nums.sort( ( a, b ) => a - b );

    const N = nums.length;
    let ret = Infinity;

    for ( let i = 0; i < N; ++i ) {
        if ( nums[i - 1] === nums[i] ) continue;

        let [l, u] = [i + 1, N - 1];
        while ( l < u ) {
            const sum = nums[i] + nums[l] + nums[u];
            if ( sum === target ) {
                return target;
            } else if ( sum < target ) {
                l++;
            } else {
                u--;
            }

            if ( Math.abs( ret - target ) > Math.abs( sum - target ) ) {
                ret = sum;
            }
        }
    }
    return ret;
}

describe( '3Sum Closest', () => {
    it( '[-1,2,1,-4], 1', () => {
        expect( threeSumClosest( [-1, 2, 1, -4], 1 ) ).toEqual( 2 );
    } );

    it( '[0,0,0], 1', () => {
        expect( threeSumClosest( [0, 0, 0], 1 ) ).toEqual( 0 );
    } );
} );
