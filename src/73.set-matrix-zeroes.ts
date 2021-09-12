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
  const rows: number = matrix.length;
  const cols: number = matrix[0].length;
  let isCol = false;

  for ( let i = 0; i < rows; i++ ) {
    if ( matrix[i][0] === 0 ) {
      isCol = true;
    }

    for ( let j = 1; j < cols; j++ ) {
      if ( matrix[i][j] === 0 ) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for ( let i = 1; i < rows; i++ ) {
    for ( let j = 1; j < cols; j++ ) {
      if ( matrix[i][0] === 0 || matrix[0][j] === 0 ) {
        matrix[i][j] = 0;
      }
    }
  }
  if ( matrix[0][0] == 0 ) {
    for ( let j = 0; j < cols; j++ ) {
      matrix[0][j] = 0;
    }
  }
  if ( isCol ) {
    for ( let i = 0; i < rows; i++ ) {
      matrix[i][0] = 0;
    }
  }
}
// @lc code=end
