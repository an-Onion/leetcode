/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
export function combinationSum2(candidates: number[], target: number): number[][] {

  candidates.sort((a: number, b: number): number => a-b);

  function DFS(start: number, t: number): number[][] {

    if( 0 === t ) return [[]];

    const res: number[][] = [];

    for(let i = start; i < candidates.length; i++){
      if( candidates[i] > t ) break;
      if( i > start && candidates[i] === candidates[i-1] ) continue;

      const sub = DFS(i+1, t-candidates[i])
      .map((x) => {
        x.push(candidates[i]);
        return x;
      });
      res.push(...sub);
    }

    return res;
  }
  return DFS(0, target);
}
// @lc code=end

