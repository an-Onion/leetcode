/*
 * @lc app=leetcode id=775 lang=typescript
 *
 * [775] Global and Local Inversions
 */

// @lc code=start
export function isIdealPermutation( nums: number[] ): boolean {

  let cMax = nums[0];
  for( let i = 0; i < nums.length - 2; ++i ){
    cMax = Math.max( nums[i], cMax );
    if( cMax > nums[i+2] ) return false;
  }
  return true;
}
// @lc code=end

