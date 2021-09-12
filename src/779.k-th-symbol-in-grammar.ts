/*
 * @lc app=leetcode id=779 lang=typescript
 *
 * [779] K-th Symbol in Grammar
 */

// @lc code=start
export function kthGrammar( n: number, k: number ): number {

  if( n === 1 ) return 0;
  if( k % 2 === 0 ) return kthGrammar( n-1, k >> 1 ) ^ 1;
  return kthGrammar( n-1, k+1 >> 1 );
}
// @lc code=end

