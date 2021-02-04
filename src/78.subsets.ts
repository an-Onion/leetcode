/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
export function subsets(nums: number[]): number[][] {

  return DFS(0);

  function DFS(idx: number): number[][] {

    if( idx === nums.length ) return [[]];

    return DFS(idx+1).reduce((acc, x) => {
      acc.push(x, [nums[idx], ...x]);
      return acc;
    }, [] as number[][]);

  }
}
// @lc code=end

