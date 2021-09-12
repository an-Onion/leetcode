/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
export function spiralOrder( matrix: number[][] ): number[] {

  const M = matrix.length, N = matrix[0].length;

  const visited = [];

  for( let i = 0; i < M; i++ ) visited.push( [] );

  const directions: [number, number][] = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  let start: [number, number] = [0,0];
  const res = [matrix[0][0]];
  visited[0][0] = true;

  let [x,y]: number[] = [];

  while( [x,y].toString() !== start.toString() ) {
    [x,y] = start;
    for( let i = 0; i < directions.length; i++ ) {
      start = move( ...start, ...directions[i] );
    }
  }

  return res;

  function move( i: number,j: number, h: number, v: number ): [number, number]{

    while( visit( i+h, j+v ) ) i += h, j+=v;

    return [i,j];
  }

  function visit( x: number, y:number ){
    if( x < 0 || x >= M || y < 0 || y>= N ) return false;
    if( visited[x][y] ) return false;
    visited[x][y] = true;
    res.push( matrix[x][y] );
    return true;
  }

}
// @lc code=end

