/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
export function minPathSum( grid: number[][] ): number {

  const dp = Array( grid[0].length ).fill( Infinity );

  dp[0] = 0;

  for( let row = 0; row < grid.length; row++ ) {
    for( let col = 0; col < grid[0].length; col++ ){
      dp[col] = Math.min( dp[col-1] ?? Infinity, dp[col] )  + grid[row][col];
    }
  }

  return dp[grid[0].length-1];
}
// @lc code=end

