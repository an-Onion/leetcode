/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
export function canJump(nums: number[]): boolean {

  let sofar = nums.length - 1;

  for(let i = nums.length -1; i >=0; i-- ){
    if( i+nums[i] >= sofar )
      sofar = i;
  }

  return sofar === 0;
}
// @lc code=end

