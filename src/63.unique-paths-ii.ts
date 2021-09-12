/*
 * @lc app=leetcode id=63 lang=typescript
 *
 * [63] Unique Paths II
 */

// @lc code=start
export function uniquePathsWithObstacles( obstacleGrid: number[][] ): number {
  const dp =[1];

  for( let i = 0; i < obstacleGrid.length; i++ ) {
    for( let j = 0; j < obstacleGrid[0].length; j++ ){
      if( obstacleGrid[i][j] ){
        dp[j] = 0; continue;
      }
      dp[j] = ( dp[j] || 0 ) + ( dp[j-1] || 0 );
    }
  }
  return dp[obstacleGrid[0].length-1];
}
// @lc code=end

