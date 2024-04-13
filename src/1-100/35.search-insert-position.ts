/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
export function searchInsert( nums: number[], target: number ): number {

  let l = 0, u = nums.length - 1;

  while( l <= u ) {
    const m = ( l + u ) / 2 | 0;

    if( nums[m] < target ) l = m + 1;
    else u = m -1;
  }
  return l;
}
// @lc code=end

