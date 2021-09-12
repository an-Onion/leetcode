/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
export function isPalindrome( x: number ): boolean {

  if( x < 0 ) return false;
  if( x === 0 ) return true;
  if( x % 10 === 0 ) return false;

  let tail = 0;

  while( tail < x ){
    const rem = x % 10;
    tail = 10*tail + rem;

    if( tail === x ) return true;

    x = x / 10 | 0;
    if( tail === x ) return true;
  }

  return false;
}
// @lc code=end

