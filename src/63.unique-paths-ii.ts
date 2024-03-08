/*
 * @lc app=leetcode id=63 lang=typescript
 *
 * [63] Unique Paths II
 */

// @lc code=start
export function uniquePathsWithObstacles( obstacleGrid: number[][] ): number {
  
  const dp = Array( obstacleGrid[0].length ).fill( 0 );
  dp[0] = 1;

  for( let row = 0; row < obstacleGrid.length; row++ ){
    for( let col = 0; col < obstacleGrid[0].length; col++ ){

      if( obstacleGrid[row][col] === 1 ){
        dp[col] = 0; continue;
      }
      dp[col] += dp[col-1] || 0;
    }
  }

  return dp[dp.length-1];

}
// @lc code=end

