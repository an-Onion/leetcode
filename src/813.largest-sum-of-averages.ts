/*
 * @lc app=leetcode id=813 lang=typescript
 *
 * [813] Largest Sum of Averages
 */

// @lc code=start
export function largestSumOfAverages(nums: number[], k: number): number {

  const N = nums.length;
  const sum = Array(N+1).fill(0);

  for(let i = 0; i < N; ++i){
    sum[i+1] = sum[i] + nums[i];
  }

  const dp = Array(N).fill(0);

  for(let i = 0; i < N; ++i){
    dp[i] = (sum[N] - sum[i]) / (N - i);
  }

  for(let group = 0; group < k-1; group++){
    for(let i = 0; i < N; ++i){
      for(let j = i+1; j < N; ++j){
        dp[i] = Math.max(dp[i], dp[j] + (sum[j] - sum[i]) / (j-i));
      }
    }
  }

  return dp[0];
}
// @lc code=end

