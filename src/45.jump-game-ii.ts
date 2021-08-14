/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
export function jump(nums: number[]): number {
  let step = 0, covered = 0, next = 0;

  for(let i = 0; i < nums.length && covered < nums.length-1; ++i){
    if( i > covered ){
      covered = next;
      step++;
    }
    next = Math.max(next, i+nums[i]);
  }

  return step;
}
// @lc code=end

