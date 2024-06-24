/*
 * @lc app=leetcode id=523 lang=typescript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
export function checkSubarraySum( nums: number[], k: number ): boolean {
  const map: Record<number, number> = { 0: -1 };

  let sum = 0;
  for( let i = 0; i < nums.length; ++i ){
    sum = ( sum+nums[i] ) % k;
    const pre = map[sum];
    if( pre === undefined ){
      map[sum] = i;
      continue;
    }
    if( i - pre > 1 ) return true;
  }

  return false;
}
// @lc code=end

