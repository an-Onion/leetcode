/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
export function fib(N: number): number {
  const dp = [0, 1];
  for(let i = 2; i <=N; ++i)
    dp.push(dp[i-1]+dp[i-2]);

  return dp[N];
}
// @lc code=end

