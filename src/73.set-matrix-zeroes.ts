/*
 * @lc app=leetcode id=73 lang=typescript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
export function setZeroes( matrix: number[][] ): void {

  const [M, N] = [matrix.length, matrix[0].length];
  let flag = false;

  for ( let i = 0; i < M; i++ ) {
    if ( matrix[i][0] === 0 ) {
      flag = true;
    }
    for ( let j = 1; j < N; j++ ) {
      if ( matrix[i][j] !== 0 ) continue;

      matrix[i][0] = 0;
      matrix[0][j] = 0;
    }
  }

  for ( let i = M - 1; i >= 0; i-- ) {
    for ( let j = N - 1; j >= 1; j-- ) {
      if ( matrix[i][0] === 0 || matrix[0][j] === 0 ) {
        matrix[i][j] = 0;
      }
    }

    if ( flag ) matrix[i][0] = 0;
  }
}
// @lc code=end
