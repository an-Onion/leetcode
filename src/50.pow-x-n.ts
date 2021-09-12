/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
export function myPow( x: number, n: number ): number {

  let ans = 1;

  if( n === -2147483648 ) {
    ans = x, n = -2147483647;
  }

  let exp = Math.abs( n );

  while( exp > 0 ){
    if( exp & 1 )  ans *= x;
    exp >>= 1;
    x *= x;
  }

  return n < 0 ? 1/ans : ans;
}
// @lc code=end

