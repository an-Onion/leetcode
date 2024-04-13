/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate( matrix: number[][] ): void {
  const N = matrix.length;

  matrix.reverse();

  for( let i = 0; i < N; ++i ){
    for( let j=0; j < i; ++j ) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}
// @lc code=end

