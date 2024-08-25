/*
 * @lc app=leetcode id=698 lang=typescript
 *
 * [698] Partition to K Equal Sum Subsets
 */

// @lc code=start
function canPartitionKSubsets( nums: number[], k: number ): boolean {
    const sum = nums.reduce( ( a, b ) => a + b, 0 );

    if ( sum % k !== 0 ) return false;

    nums.sort( ( a, b ) => a - b );

    if ( nums.at( -1 ) > sum / k ) return false;

    const per = sum / k;
    const N = nums.length;
    const dp = Array( 1 << N ).fill( false );
    const sub = Array( 1 << N ).fill( 0 );
    dp[0] = true;

    for ( let i = 0; i < dp.length; i++ ) {
        if ( !dp[i] ) continue;
        for ( let j = 0; j < N; j++ ) {
            if ( sub[i] + nums[j] > per ) break;

            if ( ( i & ( 1 << j ) ) !== 0 ) continue;
            const next = i | ( 1 << j );
            if ( dp[next] ) continue;
            sub[next] = ( sub[i] + nums[j] ) % per;
            dp[next] = true;
        }
    }

    return dp[( 1 << N ) - 1];
}

describe( 'Partition to K Equal Sum Subsets', () => {
    it( 'e.g. 1', () => {
        const nums = [4, 3, 2, 3, 5, 2, 1],
            k = 4;
        expect( canPartitionKSubsets( nums, k ) ).toBeTruthy();
    } );

    it( 'e.g. 2', () => {
        const nums = [1, 2, 3, 4],
            k = 3;
        expect( canPartitionKSubsets( nums, k ) ).toBeFalsy();
    } );
} );
