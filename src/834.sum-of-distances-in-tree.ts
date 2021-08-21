/*
 * @lc app=leetcode id=834 lang=typescript
 *
 * [834] Sum of Distances in Tree
 */

// @lc code=start
export function sumOfDistancesInTree(n: number, edges: number[][]): number[] {

  const ans: number[] = Array(n).fill(0);
  const count: number[] = Array(n).fill(1);

  const graph: (Set<number>)[] = Array(n).fill(0).map(() => new Set<number>());

  for(const [u,v] of edges){
    graph[u].add(v);
    graph[v].add(u);
  }

  const DFS1 = (node: number, parent: number) => {
    for(const child of graph[node]) {
      if( child === parent ) continue;

      DFS1(child, node);
      count[node] += count[child];
      ans[node] += ans[child] + count[child];
    }
  };

  const DFS2 = (node: number, parent: number)  => {
    for (const child of graph[node]){
      if (child === parent) continue;

      ans[child] = ans[node] - count[child] + n - count[child];
      DFS2(child, node);
    }
  };

  DFS1(0, -1);
  DFS2(0, -1);

  return ans;
}

// @lc code=end

