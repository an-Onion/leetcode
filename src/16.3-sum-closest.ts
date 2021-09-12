/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
export function threeSumClosest( nums: number[], target: number ): number {

  nums.sort( ( a: number, b: number ) => a - b );

  let res = 3000;

  for( let i = 0; i < nums.length; ++i ){
    if( nums[i] === nums[i-1] ) continue;

    let [l, u] = [i+1, nums.length-1];

    while( l < u ) {
      const sum = nums[i] + nums[l] + nums[u];
      if( sum === target ) return sum;

      if( sum > target ) u--;
      else l++;

      if( Math.abs( sum - target ) < Math.abs( res - target ) ) res = sum;
    }
  }

  return res;
}
// @lc code=end

