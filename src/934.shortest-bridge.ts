/*
 * @lc app=leetcode id=934 lang=typescript
 *
 * [934] Shortest Bridge
 */

// @lc code=start
export function shortestBridge(grid: number[][]): number {

  const N = grid.length;
  const Q: [number, number][] = [];

  outer: for(let i = 0; i < N; ++i){
    for(let j = 0; j < N; ++j){
      if( grid[i][j] ){
        DFS(i, j);
        break outer;
      }
    }
  }

  return BFS();

  function isInvalid(x: number, y: number){
    return x < 0 || y < 0 || x >= N || y >= N;
  }

  function BFS() {
    let bridge = 0;
    const set = new Set<number>();

    outer: while( Q.length ){
      let size = Q.length;

      while( size-- ){
        const [x, y] = Q.shift();
        if( isInvalid(x, y) ) continue;
        if( grid[x][y] === 1 ) break outer;
        if( bridge && grid[x][y] === -1 ) continue;
        if( set.has(x*100+y) ) continue;
        set.add(x*100+y);
        Q.push([x+1,y],[x-1,y],[x,y+1],[x,y-1]);
      }

      bridge++;
    }

    return bridge-1;
  }

  function DFS(x: number, y: number): void {
    if( isInvalid(x,y) ) return;

    if( grid[x][y] !== 1) return;
    Q.push([x,y]);
    grid[x][y] = -1;
    DFS(x+1, y);
    DFS(x-1, y);
    DFS(x, y+1);
    DFS(x, y-1);
  }
}
// @lc code=end

