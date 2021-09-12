/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
export function myAtoi( s: string ): number {

  const regex = /([+-]?)(\d*)/g;

  const [, sign, numeric] = regex.exec( s.trimStart() );

  if( !numeric ) return 0;

  let res = 0;
  for( let i = 0; i < numeric.length; ++i ){
    res = res*10 + ( numeric[i].charCodeAt( 0 ) - '0'.charCodeAt( 0 ) );
  }

  if( sign === '-' ){
    return Math.max( 1 << 31, -res );
  }

  return Math.min( Math.abs( 1<<31 )-1, res );
}
// @lc code=end

