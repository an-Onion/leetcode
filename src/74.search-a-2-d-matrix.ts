/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
export function searchMatrix( matrix: number[][], target: number ): boolean {

  const [row, col] = [matrix.length, matrix[0].length];

  let [l, u] = [0, row * col - 1];

  while ( l <= u ) {
    const m = l + u >> 1;

    const [i, j] = [m / col | 0, m % col];

    if ( matrix[i][j] == target ) return true;
    else if ( matrix[i][j] < target ) l = m + 1;
    else u = m - 1;
  }
  return false;

}
// @lc code=end

