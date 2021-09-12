/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
export function maxSubArray( nums: number[] ): number {
  let sofar = nums[0], end = 0;

  for( const cur of nums ){
    if( end < 0 ) end = cur;
    else end += cur;

    if( end > sofar ) sofar = end;
  }

  return sofar;
}
// @lc code=end

