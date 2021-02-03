/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
export function searchMatrix(matrix: number[][], target: number): boolean {

  const m = matrix.length, n = matrix[0].length;

  let l = 0, u = m*n-1;

  while (l <= u) {

    const mid = l+u >> 1;
    const [pos, offset] = toPoint(mid);

    if( matrix[pos][offset] < target ) l = mid + 1;
    else if( matrix[pos][offset] > target ) u = mid -1;
    else return true;
  }

  return false;

  function toPoint(mid: number): [number, number] {
    const pos = mid / n | 0;
    const offset = mid % n;

    return [pos, offset];
  }
}
// @lc code=end

