/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
export function reverse(x: number): number {
  const [MAX_INT, MIN_INT] = [2147483647, -2147483648];

  let res = 0;
  while( Math.abs(x) >= 1 ){
    res *= 10;
    res += x % 10;
    if( res < MIN_INT || res > MAX_INT ) return 0;
    x = x / 10 | 0;
  }
  return res;
}
// @lc code=end

