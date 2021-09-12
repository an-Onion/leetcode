/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors( nums: number[] ): void {

  let red = -1, blue = nums.length, idx = 0;

  while( idx < blue ){

    if( nums[idx] === 0 ){
      swap( ++red, idx );
    }

    if( nums[idx] === 2 ){
      swap( --blue, idx );
      continue;
    }
    idx++;
  }

  function swap( a: number, b: number ){
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }
}
// @lc code=end

