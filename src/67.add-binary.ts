/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
export function addBinary( a: string, b: string ): string {

  const binary = ( c: string | undefined ): number => parseInt( c || '0' );

  const arrA = a.split( '' ).reverse(), arrB = b.split( '' ).reverse();
  const res: number[] = [];
  let carry = 0;

  for( let i = 0; i < arrA.length || i < arrB.length; ++i ){
    const sum = binary( arrA[i] ) + binary( arrB[i] ) + carry;
    res.push( sum & 1 );
    carry = sum >> 1;
  }

  if( carry ) res.push ( 1 );

  return res.reverse().join( '' );
}
// @lc code=end

