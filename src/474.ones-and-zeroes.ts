/*
 * @lc app=leetcode id=474 lang=typescript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
export function findMaxForm(strs: string[], m: number, n: number): number {

  const dp: number[][] = Array(m+1).fill(0)
                                   .map(() => Array(n+1).fill(0));

  for(const str of strs){
    const [zero, one] = extract(str);
    for(let i = m; i >= zero; --i){
      for(let j = n; j>= one; --j){
        dp[i][j] = Math.max(dp[i][j], dp[i-zero][j-one]+1);
      }
    }
  }

  return dp[m][n];

  function extract(str: string): [number, number]{
    let zero = 0, one = 0;

    for(const c of str){
      if(c === '0') zero++;
      else one++;
    }
    return [zero, one];
  }
}
// @lc code=end

