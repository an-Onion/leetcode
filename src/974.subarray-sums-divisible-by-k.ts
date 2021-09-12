/*
 * @lc app=leetcode id=974 lang=typescript
 *
 * [974] Subarray Sums Divisible by K
 */

// @lc code=start
export function subarraysDivByK( nums: number[], k: number ): number {

  const preSum: number[] = [];

  let sum = 0;
  for( const num of nums ) {

    sum = ( sum+num ) % k;

    if( sum < 0 ) sum += k;

    if( preSum[sum] === undefined ){
      preSum[sum] = 0;
    }
    preSum[sum]++;
  }
  const zero = preSum[0] || 0;
  return preSum.filter( x => x ).reduce( ( acc,x ) => acc+ x*( x-1 ) / 2, zero );
}
// @lc code=end

