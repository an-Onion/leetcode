/*
 * @lc app=leetcode id=96 lang=typescript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
export function numTrees( n: number ): number {

  const dp: number[] = new Array( n + 1 ).fill( 0 );
  dp[0] = 1;
  for( let i = 1; i <= n; i++ ) {
    for( let j =1; j <= i; j++ ){
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}
// @lc code=end

