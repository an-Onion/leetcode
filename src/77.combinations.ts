/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
export function combine( n: number, k: number ): number[][] {

  return DFS( 1, k );

  function DFS( start: number, left: number ): number[][] {

    if( left <=0 ) return [[]];
    if( start > n ) return [];

    return DFS( start+1, left-1 )
    .map( ( x ) => [start, ...x] )
    .concat( DFS( start+1, left ) );
  }

}
// @lc code=end

