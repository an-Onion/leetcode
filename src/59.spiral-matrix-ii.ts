/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
export function generateMatrix(n: number): number[][] {
  const matrix: number[][] = [];
  let globalV = 1;

  for(let i = 0; i < n; i++) matrix.push([]);

  const directions: [number, number][] = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  let start: [number, number] = [0,0];
  matrix[0][0] = globalV;

  for(let i = 0; i < (n+1 >> 1); ++i) {
    for(const dir of directions)
      start = move(start, dir);
  }

  return matrix;

  function move([i, j]: [number, number], [h,v]: [number, number]): [number, number]{

    while( isVisited(i+h, j+v) ){
      i += h, j += v;
      matrix[i][j] = ++globalV;
    }

    return [i,j];
  }

  function isVisited(x: number, y: number): boolean {

    if( x < 0 || x >=n || y < 0 || y >= n) return false;
    return matrix[x][y] === undefined;
  }

}
// @lc code=end

