/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
export function convert( s: string, numRows: number ): string {

  if( numRows === 1 ) return s;

  const T = ( numRows - 1 ) * 2;

  const idx = ( i ) => i % T < numRows ? ( i % T ) : ( T - i%T );

  const row : string[] = Array( numRows ).fill( '' );

  for( let i = 0; i < s.length; i++ ){
    const j = idx( i );
    row[j] += s[i];
  }

  return row.join( '' );
}
// @lc code=end

