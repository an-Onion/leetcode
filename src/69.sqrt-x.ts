/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
export function mySqrt(x: number): number {
  let l = 0, u = 1 << 16;

  while( l <= u ){
    const m = (l+u) / 2 | 0;
    if( m * m <= x ) l = m + 1;
    else u = m - 1;
  }

  return u;
}
// @lc code=end

