/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
export function canJump( nums: number[] ): boolean {

  let [sofar, next] = [0, nums[0]];

  while( sofar <= next ) {
    next = Math.max( next, sofar + nums[sofar] );

    if( next >= nums.length - 1 ) return true;
    sofar++;
  }

  return sofar > nums.length - 1;
  
}
// @lc code=end

