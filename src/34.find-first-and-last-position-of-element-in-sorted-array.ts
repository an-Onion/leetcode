/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
export function searchRange(nums: number[], target: number): number[] {
  function upBound(low: number, up: number){
    while( low <= up ){
      const mid = low + up >> 1;
      if( nums[mid] > target ) up = mid - 1;
      else low = mid + 1;
    }
    return up;
  }

  function lowBound(low: number, up: number){
    while( low <= up ){
      const mid = low + up >> 1;
      if( nums[mid] < target ) low = mid + 1;
      else up = mid - 1;
    }
    return low;
  }

  const [l, u] = [lowBound(0, nums.length-1), upBound(0, nums.length-1)];

  const res = [];

  res.push( nums[l] === target ? l : -1);
  res.push( nums[u] === target ? u : -1);

  return res;
}
// @lc code=end

