/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
export function spiralOrder( matrix: number[][] ): number[] {

  const M = matrix.length, N = matrix[0].length;

  const result: number[] = [];

  let [top, bottom, left, right] = [0, M - 1, 0, N - 1];
  let [i, j] = [0, 0];
  while( result.length < M * N ) {
    
    for( j = left; j <= right; j++ ) {
      result.push( matrix[i][j] );
    }

    top++, j = right;

    if( result.length === M * N ) break;

    for( i = top; i <= bottom; i++ ) {
      result.push( matrix[i][j] );
    }

    right--, i = bottom;

    if( result.length === M * N ) break;

    for( j = right; j >= left; j-- ){
      result.push( matrix[i][j] );
    }

    bottom--, j = left;

    if( result.length === M * N ) break;

    for( i = bottom; i >= top; i-- ) {
      result.push( matrix[i][j] );
    }
    left++, i = top;
  }
  return result;
}
// @lc code=end
