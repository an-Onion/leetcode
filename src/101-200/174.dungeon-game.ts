/*
 * @lc app=leetcode id=174 lang=typescript
 *
 * [174] Dungeon Game
 */

// @lc code=start
export function calculateMinimumHP( dungeon: number[][] ): number {

  const [M, N] = [dungeon.length, dungeon[0].length];
  const dp = Array.from( { length: M+1 }, () => Array( N+1 ).fill( Infinity ) );
  dp[M][N-1] = 1;

  for( let row = M-1; row >= 0; --row ){
    for( let col = N-1; col >= 0; --col ){
      const blood = Math.min( dp[row+1][col], dp[row][col+1] ) - dungeon[row][col];
      dp[row][col] = blood <= 0 ? 1 : blood;
    }
  }
  return dp[0][0];
}
// @lc code=end

