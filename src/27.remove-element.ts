/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
export function removeElement(nums: number[], val: number): number {

  let head = 0, tail = nums.length;

  while( head < tail ) {
    if(nums[head] === val ) nums[head] = nums[--tail];
    else head++;
  }

  return tail;
}
// @lc code=end

