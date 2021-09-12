/*
 * @lc app=leetcode id=41 lang=typescript
 *
 * [41] First Missing Positive
 */

// @lc code=start
export function firstMissingPositive( nums: number[] ): number {

  for( let i = 0; i < nums.length; i++ ) {
    while ( 0 < nums[i] && nums[i] <= i ){
      const j = nums[i] - 1;
      if( nums[i] === nums[j] )
        nums[i] = -1;
      else
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  let res = 1;
  for( let i = 0; i < nums.length; i++ ){
    if( nums[i] === i+1 ) res++;
    else return res;
  }

  return res;
}
// @lc code=end

