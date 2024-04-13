/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
export function uniquePaths( m: number, n: number ): number {

  const dp = Array( n ).fill( 1 );

  for( let i = 1; i < m; i++ )
    for( let j = 1; j < n; j++ )
      dp[ j ] += dp[ j - 1 ];
  
  return dp[ n - 1 ];
  
}
// @lc code=end

