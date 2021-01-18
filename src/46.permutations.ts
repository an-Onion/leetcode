/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
export function permute(nums: number[]): number[][] {
  function swap(a: number, b: number): void {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }

  function DFS(start: number): number[][] {

    if( start === nums.length ) return [[]];

    const res: number[][] = [];

    for(let i = start; i < nums.length; i++){
      swap(start, i);
      const sub = DFS(start+1).map((x) => {x.push(nums[start]); return x;});
      res.push(...sub);
      swap(start, i);
    }

    return res;
  }

  return DFS(0);
}
// @lc code=end

