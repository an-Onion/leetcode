/*
 * @lc app=leetcode id=808 lang=typescript
 *
 * [808] Soup Servings
 */

// @lc code=start
export function soupServings(n: number): number {

  if( n > 4800 ) return 1;

  const N = (n+24) / 25 | 0;

  const dp = Array(N+1).fill(0)
    .map(() => Array(N+1).fill(0));

  const put = (x: number, y: number, val: number): void => {
    x = Math.min(x, N);
    y = Math.min(y, N);
    dp[x][y] += val;
  };

  dp[0][0] = 1;

  for(let i = 0; i < N; ++i){
    for(let j = 0; j < N; ++j){
      const val = dp[i][j] / 4;
      if( !val ) continue;
      put(i+4, j, val);
      put(i+3, j+1, val);
      put(i+2, j+2, val);
      put(i+1, j+3, val);
    }
  }

  let ret = dp[N][N] / 2;

  for(let i = 0; i < N; ++i){
    ret += dp[N][i];
  }

  return ret;
}
// @lc code=end

