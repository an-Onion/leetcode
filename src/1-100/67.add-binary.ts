/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
export function addBinary( a: string, b: string ): string {

  const ret = [];
  const A = a.split( '' ).reverse().map( ( v ) => parseInt( v, 10 ) );
  const B = b.split( '' ).reverse().map( ( v ) => parseInt( v, 10 ) );

  let carry = 0;
  for( let i = 0; i < A.length || i < B.length; i++ ){
    const sum = ( A[i] || 0 ) + ( B[i] || 0 ) + carry;
    ret.push( sum % 2 );
    carry = sum >> 1;
  }
  if( carry ) ret.push( carry );
  return ret.reverse().join( '' );
}
// @lc code=end

