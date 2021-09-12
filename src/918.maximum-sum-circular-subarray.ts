/*
 * @lc app=leetcode id=918 lang=typescript
 *
 * [918] Maximum Sum Circular Subarray
 */

// @lc code=start
export function maxSubarraySumCircular( nums: number[] ): number {

  const max = maxSub();

  if( max <= 0 ) return max;

  const sum = nums.reduce( ( acc, num ) => acc+num, 0 );
  const min = minSub();

  return Math.max( max, sum-min );

  function maxSub() {
    let [sofar, rear] = [nums[0], nums[0]];

    for( let i = 1; i < nums.length; ++i ){

      if( rear <= 0 ) rear = 0;

      rear += nums[i];

      sofar = Math.max( sofar, rear );
    }
    return sofar;
  }

  function minSub() {
    let [sofar, rear] = [nums[0], nums[0]];

    for( let i = 1; i < nums.length; ++i ){

      if( rear >= 0 ) rear = 0;

      rear += nums[i];

      sofar = Math.min( sofar, rear );
    }
    return sofar;
  }
}
// @lc code=end

