/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
export function uniquePaths( m: number, n: number ): number {


  const [max, min] = m > n ? [m-1, n-1] : [n-1, m-1];

  let res = 1;
  for( let i = 1; i <= min; ++i ){
    res = res * ( i+max ) / i;
  }

  return res;
}
// @lc code=end

