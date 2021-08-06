/*
 * @lc app=leetcode id=926 lang=typescript
 *
 * [926] Flip String to Monotone Increasing
 */

// @lc code=start
export function minFlipsMonoIncr(s: string): number {

  const dp: number[] = [0,0];

  for(let i = 0; i < s.length; i++) {
    if(s[i] === '0'){
      dp[1] = 1 + Math.min(dp[1], dp[0]);
    } else {
      dp[1] = Math.min(dp[1], dp[0]);
      dp[0]++;
    }
  }

  return Math.min(...dp);
}
// @lc code=end

