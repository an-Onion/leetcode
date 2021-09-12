/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
export function maxProfit( prices: number[] ): number {

  let [sofar, min] = [0, Infinity];

  for( const p of prices ) {
    if( p - min > sofar ) sofar = p - min;
    if( p < min ) min = p;
  }
  return sofar;
}
// @lc code=end

