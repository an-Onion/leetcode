/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 */

// @lc code=start
export function multiply( num1: string, num2: string ): string {
  if( num1 === '0' || num2 === '0' ) return '0';

  const cToI: ( c: string ) => number =( c ) => c.charCodeAt( 0 ) - 48;

  const A: number[] = num1.split( '' ).map( cToI ).reverse();
  const B: number[] = num2.split( '' ).map( cToI ).reverse();

  const C = Array( num1.length + num2.length-1 ).fill( 0 );

  for( let i = 0; i < A.length; i++ )
    for( let j = 0; j < B.length; j++ )
      C[i+j] = C[i+j] + A[i] * B[j];

  let carry = 0;
  for( let k = 0; k < C.length; k++ ){
    C[k] += carry;
    carry = C[k] / 10 | 0;
    C[k] = C[k] % 10;
  }

  if( carry ) C.push( carry );

  return C.reverse().join( '' );
}
// @lc code=end

