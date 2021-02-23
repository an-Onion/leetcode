/*
 * @lc app=leetcode id=89 lang=typescript
 *
 * [89] Gray Code
 */

// @lc code=start
export function grayCode(n: number): number[] {
  const res: number[] = [];
  const N = 1 << n;

  for(let i = 0; i < N; i++)
    res.push(i ^ i>>1);
  return res;
}
// @lc code=end

