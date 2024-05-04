/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
export function jump( nums: number[] ): number {
  let jumps = 0, covered = 0, next = nums[0];

  for( let i = 0; i < nums.length; i++ ){

    if( i > covered ){
      covered = next;
      jumps++;
    }

    if( i+ nums[i] > next ) {
      next = i + nums[i];
    }

    if( covered >= nums.length - 1 ) break;
  }
  return jumps;
}
// @lc code=end

