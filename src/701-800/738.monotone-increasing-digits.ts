/*
 * @lc app=leetcode id=738 lang=typescript
 *
 * [738] Monotone Increasing Digits
 */

// @lc code=start
export function monotoneIncreasingDigits( n: number ): number {

  const nums = [];

  while( n ){
    nums.push( n % 10 );
    n = n / 10 | 0;
  }

  let marked = -1;
  for( let i = 0; i < nums.length-1; ++i ){
    if( nums[i] < nums[i+1] ){
      nums[i+1]--;
      marked = i;
    }
  }

  nums.fill( 9, 0, marked+1 );
  return parseInt( nums.reverse().join( '' ) );
}
// @lc code=end

