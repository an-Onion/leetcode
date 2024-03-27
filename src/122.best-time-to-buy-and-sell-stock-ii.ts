/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
export function maxProfit( prices: number[] ): number {

  let profile = 0;
  for ( let i = 1; i < prices.length; i++ ) {
    if ( prices[i] > prices[i - 1] ) {
      profile += prices[i] - prices[i - 1];
    }
  }
  return profile;
}
// @lc code=end

