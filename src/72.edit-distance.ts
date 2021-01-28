/*
 * @lc app=leetcode id=72 lang=typescript
 *
 * [72] Edit Distance
 */

// @lc code=start
export function minDistance(word1: string, word2: string): number {

  const dp = [];

  for(let i = 0; i <= word2.length; ++i) dp.push(i);

  for(let i = 1; i <= word1.length; ++i) {
    let pre = dp[0];
    dp[0] = i;
    for(let j = 1; j <= word2.length; ++j){
      const t = dp[j];
      if( word1[i-1] === word2[j-1] )
        dp[j] = pre;
      else
        dp[j] = Math.min(pre, dp[j-1], dp[j]) + 1;
      pre = t;
    }
  }

  return dp[word2.length];
}
// @lc code=end

