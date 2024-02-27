/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
export function myPow( x: number, n: number ): number {

  let ans = 1;
  const min = -2147483648; // - 2**31
  
  if( n === min ) {
    ans = x, n = min+1;
  }

  let exp = Math.abs( n );

  while( exp > 0 ){
    if( exp & 1 )  ans *= x;
    exp >>= 1;
    x *= x;
  }

  return n > 0 ? ans : 1 / ans;
}
// @lc code=end

