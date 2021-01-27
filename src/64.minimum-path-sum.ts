/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
export function minPathSum(grid: number[][]): number {

  const dp = [0];

  for( let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; ++j ){
      dp[j] = Math.min(dp[j] ?? Infinity, dp[j-1] ?? Infinity) + grid[i][j];
    }
  }

  return dp[grid[0].length-1];
}
// @lc code=end

