/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
export function mySqrt( x: number ): number {
  
  if( x === 0 ) return 0;

  let [l, u] = [0, x];

  while( l <= u ) {
    const m = u - ( ( u - l ) >> 1 );

    if( m <= x / m ) {
      l = m + 1;
    } else u = m - 1;
  }
  return u;
}
// @lc code=end

