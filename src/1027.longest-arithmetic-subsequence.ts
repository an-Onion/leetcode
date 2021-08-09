/*
 * @lc app=leetcode id=1027 lang=typescript
 *
 * [1027] Longest Arithmetic Subsequence
 */

// @lc code=start
export function longestArithSeqLength(nums: number[]): number {

  const dp: number[][] = Array(nums.length);
  let res = 0;
  for(let j = 0; j < nums.length; ++j ){
    dp[j] = [];
    for(let i = 0; i < j; ++i ){
      const diff = nums[j] - nums[i];
      dp[j][diff] = (dp[i][diff] || 1) + 1;
      res = Math.max(res, dp[j][diff]);
    }
  }
  return res;
}
// @lc code=end

