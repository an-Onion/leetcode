/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
export function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a,b) => a-b);
  DFS(0, []);
  return res;

  function DFS(start: number, path: number[]): void {
    res.push(path);
    for(let i = start; i < nums.length; i++){
      if( i > start && nums[i] === nums[i-1] ) continue;
      DFS(i+1, [...path, nums[i]]);
    }
  }
}
// @lc code=end

