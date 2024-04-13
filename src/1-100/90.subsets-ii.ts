/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
export function subsetsWithDup( nums: number[] ): number[][] {
  const res: number[][] = [];
  nums.sort( ( a,b ) => a-b );
  
  function DFS( start: number, path: number[] ): void | number {
    
    if( start === nums.length ){
      return res.push( [...path] );
    }

    DFS( start+1, [...path, nums[start] ] );

    while( nums[start] === nums[start+1] ) start++;
    DFS( start+1, [...path] );
  }

  DFS( 0, [] );
  return res;
}
// @lc code=end

