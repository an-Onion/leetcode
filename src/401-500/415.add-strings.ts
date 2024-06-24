/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
export function addStrings( num1: string, num2: string ): string {

  const first = num1.split( '' ).reverse(), second = num2.split( '' ).reverse();

  const res = [];

  let c = 0;
  const len = Math.max( first.length, second.length );

  for( let i = 0; i < len; ++i ){

    let curr = c;

    if( first[i] ){
      curr += first[i].charCodeAt( 0 ) - 48;
    }
    if( second[i ] ){
      curr += second[i].charCodeAt( 0 ) - 48;
    }
    res.push( curr % 10 );
    c = curr / 10 | 0;
  }

  if( c ) res.push( 1 );

  return res.reverse().join( '' );


}
// @lc code=end

