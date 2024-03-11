/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 */

// @lc code=start
export function combine( n: number, k: number ): number[][] {

  const result: number[][] = [];

  function DFS( start: number, path: number[] = [] ): void {
    
    
    if( path.length == k ) {
      result.push( [...path] );
      return;
    }

    if( start > n ) return;

    DFS( start+1, [...path, start] );

    DFS( start+1, [...path] );
  }

  DFS( 1 );

  return result;
}
// @lc code=end

