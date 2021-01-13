/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
export function search(nums: number[], target: number): number {

  let [low, up] = [0, nums.length-1];

  while( low <= up ){
    const mid = low+up >> 1;

    if( nums[mid] ===  target ) return mid;

    if( nums[mid] >=  nums[low] ){
      if( nums[low] <= target && target < nums[mid] ) up = mid - 1;
      else low = mid + 1;
    } else {
      if( nums[mid] < target && target <= nums[up] ) low = mid + 1;
      else up = mid - 1;
    }

  }
  return -1;
}
// @lc code=end

