/*
 * @lc app=leetcode id=688 lang=typescript
 *
 * [688] Knight Probability in Chessboard
 */

// @lc code=start
export function knightProbability(n: number, k: number, row: number, column: number): number {

  const dirs: number[][] = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];

  let dp: number[][] = initDp();
  dp[row][column] = 1;

  while(k--){
    const next: number[][] = initDp();
    for(let r = 0; r < n; r++){
      for(let c = 0; c < n; c++){
        for(const [dr, dc] of dirs){
          const nextRow = r+dr, nextCol = c+dc;
          if( nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n) continue;
          next[nextRow][nextCol] += dp[r][c] / 8;
        }
      }
    }
    dp = next;
  }

  let ret = 0;

  for(let r = 0; r < n; r++){
    for(let c = 0; c < n; c++){
      ret += dp[r][c];
    }
  }

  return ret;


  function initDp(): number[][] {
    return Array(n).fill(0).map(() => Array(n).fill(0));
  }

}
// @lc code=end

