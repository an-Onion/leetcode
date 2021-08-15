/*
 * @lc app=leetcode id=518 lang=typescript
 *
 * [518] Coin Change 2
 */

// @lc code=start
export function change(amount: number, coins: number[]): number {

  const dp: number[] = Array(amount+1).fill(0);

  dp[0] = 1;
  for(const c of coins){
    for(let i = c; i <= amount; ++i){
      dp[i] += dp[i-c];
    }
  }

  return dp[amount];
}
// @lc code=end

