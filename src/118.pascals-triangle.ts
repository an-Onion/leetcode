/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
export function generate(numRows: number): number[][] {

  const res: number[][] = [];

  for(let i = 0; i < numRows; i++) {
    const pre: number[] = res[i-1] || [];
    const next: number[] = [1];

    for(let j = 0; j <  i; ++j ){
      next.push( pre[j] + (pre[j+1] || 0));
    }
    res.push(next);
  }

  return res;

}
// @lc code=end

