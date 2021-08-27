/*
 * @lc app=leetcode id=790 lang=typescript
 *
 * [790] Domino and Tromino Tiling
 */

// @lc code=start
export function numTilings(n: number): number {

  const g = [0,1,2];
  const u = [0,1,2];
  const modulo = 1000000007;

  for(let i = 3; i <=n; ++i){
    u[i] = (u[i-1] + g[i-1]) % modulo;
    g[i] = (g[i-1] + g[i-2] + 2 * u[i-2]) % modulo;
  }
  return g[n];
}
// @lc code=end

