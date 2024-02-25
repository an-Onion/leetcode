/*
 * @lc app=leetcode id=41 lang=typescript
 *
 * [41] First Missing Positive
 */

// @lc code=start
export function firstMissingPositive( nums: number[] ): number {

  
  function swap( i: number, j: number ): void {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  const N = nums.length;

  for ( let i = 0; i < N; i++ ) {

    while( nums[i] > 0 && nums[i] <= N && nums[i]-1 !== i && nums[nums[i]-1] !== nums[i] ) {
      swap( i, nums[i] - 1 );
    }
    
  }
  let ret = 1;
  for ( let i = 0; i < N; i++ ) {
    if( nums[i] !== i + 1 ) {
      return i + 1;
    }
    ret++;
  }

  return ret;
  
}
// @lc code=end

