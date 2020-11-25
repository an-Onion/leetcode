/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
export function removeDuplicates(nums: number[]): number {

  if( nums.length === 0 ) return 0;

  let res = 0;

  for(let idx = 0; idx < nums.length; idx++) {
    if( nums[idx] === nums[res] ) continue;
    nums[++res] = nums[idx];
  }

  return res+1;
}
// @lc code=end

