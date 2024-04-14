/*
 * @lc app=leetcode id=240 lang=typescript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
export function searchMatrix( matrix: number[][], target: number ): boolean {

  let start = 0;
  for( let i = matrix.length-1; i >= 0; --i ){
    start = bs( start, matrix[i].length-1, i );
    if( matrix[i][start] === target ) return true;
  }

  return false;

  function bs( l: number, u: number, idx: number ){
    while( l <= u ){
      const m = l+u >> 1;
      if( matrix[idx][m] <= target ) l = m+1;
      else u = m-1;
    }
    return Math.max( u, 0 );
  }

}
// @lc code=end

