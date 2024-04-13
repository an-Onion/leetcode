/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
export function maxSubArray( nums: number[] ): number {
  
  let [sofar, ending] = [nums[0], 0];

  for( const num of nums ) {
    ending += num;
    sofar = Math.max( sofar, ending );
    ending = Math.max( 0, ending );
  }

  return sofar;
}
// @lc code=end

