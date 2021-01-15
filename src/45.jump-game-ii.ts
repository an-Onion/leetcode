/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
export function jump(nums: number[]): number {
  let [nextCovered, thePreviousRange, step] = [0,0,0];

  for(let i = 0; i < nums.length; i++) {
    if( i > thePreviousRange ){
      step++;
      thePreviousRange = nextCovered;
    }
    nextCovered = Math.max(nextCovered, i+nums[i]);
  }

  return step;
}
// @lc code=end

