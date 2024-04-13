/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
export function generate( numRows: number ): number[][] {
  
  if ( numRows === 0 ) return [];

  const ret: number[][] = [[1]];

  for ( let i = 1; i < numRows; i++ ) {

    const row: number[] = [];

    for ( let j = 0; j <= i; j++ ) {
      const val = ( ret[i - 1][j - 1] ?? 0 ) + ( ret[i - 1][j] ?? 0 );
      row.push( val );
    }
    ret.push( row );

  }

  return ret;
}
// @lc code=end

