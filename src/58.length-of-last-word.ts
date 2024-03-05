/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
export function lengthOfLastWord( s: string ): number {

  let ret = 0;

  for ( let i = s.length - 1; i >= 0; i-- ) {
    if( s[i] !== ' ' ) {
      ret++;
      continue;
    } 

    if( ret !== 0 ) break;
  }
  return ret;
}
// @lc code=end
