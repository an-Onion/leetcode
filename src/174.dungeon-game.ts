/*
 * @lc app=leetcode id=174 lang=typescript
 *
 * [174] Dungeon Game
 */

// @lc code=start
export function calculateMinimumHP(dungeon: number[][]): number {

  const M = dungeon.length, N = dungeon[0].length;
  const dp: number[][] = Array(M+1).fill(0)
  .map(() => Array(N+1).fill(Infinity));

  dp[M][N-1] = dp[M-1][N] = 1;

  for(let i = M-1; i>=0; --i){
    for(let j = N-1; j>=0; --j){
      const blood = Math.min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j];
      dp[i][j] = blood <= 0 ? 1 : blood;
    }
  }

  return dp[0][0];
}
// @lc code=end

