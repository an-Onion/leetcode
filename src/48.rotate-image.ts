/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  const N = matrix.length;

  for(let i = 0; i < (N / 2 | 0); i++) {
    const len = N - 1 - i;
    for(let j = i; j < len; j++) {
      swap([i,j], [j, N-1-i]);
      swap([i,j], [N-1-i, N-1-j]);
      swap([i,j], [N-1-j, i]);
    }
  }


  function swap(a: [number, number], b: [number, number]): void {
    [ matrix[a[0]][a[1]], matrix[b[0]][b[1]] ] = [ matrix[b[0]][b[1]], matrix[a[0]][a[1]] ];
  }

}
// @lc code=end

