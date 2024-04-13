/*
 * @lc app=leetcode id=81 lang=typescript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
export function search( nums: number[], target: number ): boolean {

  let [l, u] = [0, nums.length - 1];

  while( l <= u ) {
    if( l !== u && nums[l] === nums[u] ){
      l++; 
      continue;
    }
    const m = l+u >> 1;
    if( nums[m] === target ) return true;

    if( nums[m] < nums[l] ){
      if( target > nums[m] && target <= nums[u] ) l = m + 1;
      else u = m - 1;
      continue;
    } 
    if( target < nums[m] && target >= nums[l] ) u = m -1;
    else l = m + 1;
  }

  return false;
}
// @lc code=end

