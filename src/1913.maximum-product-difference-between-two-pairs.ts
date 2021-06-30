/*
 * @lc app=leetcode id=1913 lang=typescript
 *
 * [1913] Maximum Product Difference Between Two Pairs
 */

// @lc code=start
export function maxProductDifference(nums: number[]): number {

  const max = [0, 0], min = [Infinity, Infinity];

  for(const a of nums) {
    if( a > max[1] ) max[1] = a;
    if( a < min[1] ) min[1] = a;

    if( max[1] > max[0] ) [max[0], max[1]] = [max[1], max[0]];
    if( min[1] < min[0] ) [min[0], min[1]] = [min[1], min[0]];
  }

  return max[0] * max[1] - min[0] * min[1];
}
// @lc code=end

