/*
 * @lc app=leetcode id=410 lang=typescript
 *
 * [410] Split Array Largest Sum
 */

// @lc code=start
export function splitArray( nums: number[], m: number ): number {

  function split( bound: number ){

    let [count, sum] = [1, 0];

    for( let i = 0; i < nums.length; i++ ){


      if( sum + nums[i] <= bound ){
        sum += nums[i];
        continue;
      }
      sum = nums[i];
      count++;
    }
    return count;
  }

  let low = Math.max( ...nums );
  let up = 1 << 30;

  while ( low <= up ){
    const mid = low+up >> 1;

    const count = split( mid );

    if( count <= m ) up = mid - 1;
    else low = mid + 1;
  }
  return low;
}
// @lc code=end

