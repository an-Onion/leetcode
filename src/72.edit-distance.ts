/*
 * @lc app=leetcode id=72 lang=typescript
 *
 * [72] Edit Distance
 */

// @lc code=start
export function minDistance( word1: string, word2: string ): number {

  const dp = Array.from( { length: word1.length + 1 }, () => Array( word2.length + 1 ).fill( 0 ) );

  for ( let i = 0; i <= word1.length; i++ ) {
    dp[i][0] = i;
  }

  for ( let j = 0; j <= word2.length; j++ ) {
    dp[0][j] = j;
  }

  for ( let i = 1; i <= word1.length; i++ ) {
    for ( let j = 1; j <= word2.length; j++ ) {
      const cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min( dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost );
    }
  }

  return dp[word1.length][word2.length];

}
// @lc code=end

