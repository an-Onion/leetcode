/*
 * @lc app=leetcode id=1029 lang=typescript
 *
 * [1029] Two City Scheduling
 */

// @lc code=start
export function twoCitySchedCost(costs: number[][]): number {

  const N = costs.length / 2 + 1;

  const dp: number[][] = Array(N).fill(0)
    .map(() => Array(N).fill(0));

  for(let i = 1; i < N; ++i ){
    dp[i][0] = dp[i-1][0] + costs[i-1][0];
  }

  for(let j = 1; j < N; ++j ){
    dp[0][j] = dp[0][j-1] + costs[j-1][1];
  }

  for(let i = 1; i < N; ++i ){
    for(let j = 1; j < N; ++j ){
      dp[i][j] = Math.min(dp[i-1][j]+costs[i+j-1][0], dp[i][j-1]+costs[i+j-1][1]);
    }
  }

  return dp[N-1][N-1];

}
// @lc code=end

