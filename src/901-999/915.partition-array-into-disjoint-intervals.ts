/*
 * @lc app=leetcode id=915 lang=typescript
 *
 * [915] Partition Array into Disjoint Intervals
 */

// @lc code=start
export function partitionDisjoint( nums: number[] ): number {

  let [max, possible, length] = [nums[0], nums[0], 1];

  for( let i = 1; i < nums.length; ++i ){
    if( nums[i] < max ){
      length = i+1;
      max = possible;
      continue;
    }
    possible = Math.max( possible, nums[i] );
  }

  return length;
}
// @lc code=end

