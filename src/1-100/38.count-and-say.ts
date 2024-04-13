/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
export function countAndSay( n: number ): string {

  if( n === 1 ) return '1';

  const prev = countAndSay( n - 1 );

  let [count, say] = [0, ''];

  for( let i = 0; i < prev.length; i++ ) {
    count++;

    if( prev[i] !== prev[i + 1] ) {
      say += count + prev[i];
      count = 0;
    }
  }

  return say;
}
// @lc code=end

