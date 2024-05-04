/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
export function subsets( nums: number[] ): number[][] {

  function DFS( start: number ) {
    if( start === 0 ){
      return [[]];
    }
   return DFS( start-1 ).reduce(
    ( acc, curr ) => ( [...acc, curr, [...curr, nums[start-1]]] ),
    [] );
   }
  return DFS( nums.length );
}
// @lc code=end

