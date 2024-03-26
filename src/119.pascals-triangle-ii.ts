/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
export function getRow( rowIndex: number ): number[] {

  const ret = Array( rowIndex + 1 ).fill( 1 );

  for ( let i = 0; i <= rowIndex; i++ ) {
    for ( let j = i-1; j >= 0; j-- ) {
      ret[ j ] = ret[ j ] + ( ret[ j - 1 ] ?? 0 );
    }
  }
  return ret;
}
// @lc code=end

