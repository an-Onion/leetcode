/*
 * @lc app=leetcode id=713 lang=typescript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
export function numSubarrayProductLessThanK( nums: number[], k: number ): number {

  if( k <= 1 ) return 0;

  let [res, prod] = [0, 1];

  for( let left =0, right=0; right < nums.length; ++right ){
    prod *= nums[right];

    while( prod >= k ) prod /= nums[left++];

    res += right - left + 1;
  }

  return res;
}
// @lc code=end

