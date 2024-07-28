/*
 * @lc app=leetcode id=930 lang=typescript
 *
 * [930] Binary Subarrays With Sum
 */

// @lc code=start
export function numSubarraysWithSum( nums: number[], goal: number ): number {

  let pSum = 0, ret = 0;
  const count: number[] = Array( nums.length+1 ).fill( 0 );

  count[0] = 1;

  for( const num of nums ) {
    pSum += num;

    if( pSum >= goal ) ret += count[pSum-goal];

    count[pSum]++;
  }

  return ret;
}
// @lc code=end

