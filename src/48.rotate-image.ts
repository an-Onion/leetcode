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

  for( let i = 0; i < N / 2; ++i ){
    for( let j = i; j < N-1-i; ++j ){
      const temp = matrix[i][j];
      matrix[i][j] = matrix[N-1-j][i];
      matrix[N-1-j][i] = matrix[N-1-i][N-1-j];
      matrix[N-1-i][N-1-j] = matrix[j][N-1-i];
      matrix[j][N-1-i] = temp;
    }
  }
}
// @lc code=end

