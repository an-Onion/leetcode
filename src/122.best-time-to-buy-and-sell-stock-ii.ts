/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
export function maxProfit( prices: number[] ): number {

  let ret = 0;

  for( let i = 0; i < prices.length; i++ ) {
    if( prices[i] > prices[i-1] )
      ret += prices[i] - prices[i-1];
  }

  return ret;
}
// @lc code=end

