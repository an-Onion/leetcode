/*
 * @lc app=leetcode id=684 lang=typescript
 *
 * [684] Redundant Connection
 */

// @lc code=start
export function findRedundantConnection(edges: number[][]): number[] {

  const pre: number[] = Array(edges.length+1).fill(-1);

  const unionFind = (u: number): number=> {
    let x = u;
    while(pre[x] !== -1){
      x = pre[x];
    }

    while(pre[u] !== -1){
      [pre[u], u] = [x, pre[u]];
    }

    return x;
  };

  for(const [u,v] of edges){
    const x = unionFind(u);
    const y = unionFind(v);
    if( x === y ) return [u,v];
    pre[y] = x;
  }

  return [];
}
// @lc code=end

