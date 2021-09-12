/*
 * @lc app=leetcode id=402 lang=typescript
 *
 * [402] Remove K Digits
 */

// @lc code=start
export function removeKdigits( num: string, k: number ): string {

  const stack: string[] = [];

  for( let i = 0; i < num.length; i++ ) {
    while( k && stack[stack.length-1] > num[i] ){
      stack.pop();
      k--;
    }
    if( stack.length || num[i] !== '0' )
      stack.push( num[i] );
  }

  while( k-- ) stack.pop();

  return stack.length ? stack.join( '' ) : '0';
}
// @lc code=end

