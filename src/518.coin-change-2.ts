/*
 * @lc app=leetcode id=518 lang=typescript
 *
 * [518] Coin Change 2
 */

// @lc code=start
export function change(amount: number, coins: number[]): number {

  const dp: number[] = Array(amount+1).fill(0);

  dp[0] = 1;
  for( const coin of coins ){
    for(let j = coin; j <= amount; ++j){
      dp[j] += dp[j-coin];
    }
  }
  return dp[amount];
}
// @lc code=end

