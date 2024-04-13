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

  function swap( a: number, b: number ){
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }

  let i = 0;
  let [red, blue] = [0, nums.length];

  while( i < blue ){
    if( nums[i] === 0 ){
      swap( i, red++ );
      if( i < red ) i++;
      continue;
    }

    if( nums[i] === 2 ){
      swap( i, --blue );
      continue;
    }
    i++;
  }
}
// @lc code=end

