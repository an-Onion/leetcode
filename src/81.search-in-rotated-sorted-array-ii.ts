/*
 * @lc app=leetcode id=81 lang=typescript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
export function search( nums: number[], target: number ): boolean {

  let low = 0, up = nums.length-1;

  while( low <= up ){

    if( low !== up && nums[low] === nums[up] ){
      low++;
      continue;
    }

    const mid = low+up >> 1;

    if( nums[mid] === target ) return true;

    if( nums[mid] < nums[low] ){
      if( target > nums[mid] && target <= nums[up] ) low = mid + 1;
      else up = mid - 1;
    } else {
      if( target < nums[mid] && target >= nums[low] ) up = mid -1;
      else low = mid + 1;
    }
  }

  return false;
}
// @lc code=end

