/*
 * @lc app=leetcode id=416 lang=typescript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
export function canPartition( nums: number[] ): boolean {
  const dp = [[1]];
  let MaX = 0;

  for( let i = 1; i <= nums.length; ++i ){
    const cur = nums[i-1];
    dp.push( [] );
    for( let diff = 0; diff <= MaX; ++diff ){
      if( i === 0 || dp[i-1][diff] ){
        dp[i][Math.abs( diff+cur )] = 1;
        dp[i][Math.abs( diff-cur )] = 1;
      }
    }

    MaX += cur;
  }
  return dp[nums.length][0] === 1;
}
// @lc code=end

