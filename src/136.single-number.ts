/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
export function singleNumber( nums: number[] ): number {
  return nums.reduce( ( acc,e ) => acc ^ e, 0 );
}
// @lc code=end

