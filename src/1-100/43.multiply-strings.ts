/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 */

// @lc code=start
export function multiply( num1: string, num2: string ): string {


  if( num1 === '0' || num2 === '0' ) return '0';

  const x = num1.split( '' ).reverse().map( ( a ) => parseInt( a ) );
  const y = num2.split( '' ).reverse().map( ( a ) => parseInt( a ) );
  const ret = [];

  for( let i = 0; i < y.length; i++ ) {
    for( let j = 0; j < x.length; j++ ) {
      ret[i + j] = ( ret[i + j] || 0 ) +  x[j] * y[i];
      const carry = ret[i + j] / 10  | 0;
      ret[i+j] = ret[i + j] % 10;
      if( carry > 0 )
        ret[i + j + 1] = ( ret[i + j + 1] || 0 ) + carry;
    }
  }
  return ret.reverse().join( '' );
}
// @lc code=end

