/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
export function countAndSay( n: number ): string {

  if( n === 1 ) return '1';

  const nMinus1: string = countAndSay( n-1 );
  let res = '', pre: string = nMinus1[0], count = 0;

  for( const c of  nMinus1+'#' ) {
    if( c === pre )  count += 1;
    else {
      res += count+pre;
      pre = c, count = 1;
    }
  }
  return res;
}
// @lc code=end

