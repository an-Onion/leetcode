/*
 * @lc app=leetcode id=221 lang=typescript
 *
 * [221] Maximal Square
 */

// @lc code=start
export function maximalSquare( matrix: string[][] ): number {

  const row = matrix.length, col = matrix[0].length;
  const dp: number[] = Array( col+1 ).fill( 0 );

  let pre = 0, ret = 0;
  for( let i = 1; i <= row; i++ ) {
    for( let j = 1; j <= col; j++ ){
      const temp = dp[j];

      if( matrix[i-1][j-1] === '0' ){
        dp[j] = 0;
        continue;
      }

      dp[j] = Math.min( dp[j], dp[j-1], pre ) + 1;
      ret = Math.max( ret, dp[j] );
      pre = temp;
    }

  }

  return ret * ret;
}
// @lc code=end
