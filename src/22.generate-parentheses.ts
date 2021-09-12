/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
export function generateParenthesis( n: number ): string[] {

  const res: string[] = [];

  function DFS( left: number, right: number, sub:string ){
    if( !right ) res.push( sub );
    if( left > 0 ) DFS( left-1, right, sub+'(' );
    if( right > left ) DFS( left, right-1, sub+')' );
  }
  DFS( n, n, '' );
  return res;
}
// @lc code=end

