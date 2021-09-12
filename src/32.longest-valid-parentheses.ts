/*
 * @lc app=leetcode id=32 lang=typescript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
export function longestValidParentheses( s: string ): number {

  let [left, right, res] = [0, 0, 0];

  for( let i = 0; i < s.length; ++i ){
    if( s[i] === '(' ){
      left++;
      continue;
    }
    right++;
    if( right > left ) left = right = 0;
    else if( right === left ) res = Math.max( res, right * 2 );
  }

  left = right = 0;

  for( let j = s.length -1; j >= 0; j-- ) {
    if( s[j] === ')' ){
      right++;
      continue;
    }

    left++;
    if( left > right )left = right = 0;
    else if( left === right ) res = Math.max( res, left * 2 );
  }

  return res;
}
// @lc code=end

