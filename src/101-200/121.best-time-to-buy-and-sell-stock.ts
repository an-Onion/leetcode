/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
export function maxProfit( prices: number[] ): number {

  return prices.reduce(
    ( prev, curr ) => ( { profile: Math.max( prev.profile, curr - prev.min ), min: Math.min( prev.min, curr ) } ),
    { min: Infinity, profile: 0 }
  ).profile;
}
// @lc code=end

