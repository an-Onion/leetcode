/*
 * @lc app=leetcode id=227 lang=typescript
 *
 * [227] Basic Calculator II
 */

// @lc code=start
export function calculate( s: string ): number {

  const operators = ['+', '-', '*', '/'];
  const stack: number[] = [];

  let ops: string | null = null;
  let i = 0;
  while( i < s.length ){

    if( s[i] === ' ' ) {
      i++;
      continue;
    }

    if( operators.includes( s[i] ) ){
      ops = s[i++];
      continue;
    }

    const start = i;

    while( i < s.length && isNumeric( s[i] ) ) i++;

    const current = parseInt( s.slice( start, i ) );

    if( !ops ) {
      stack.push( current );
      continue;
    }

    const pre = ['*', '/'].includes( ops ) ? stack.pop() : 0;
    const res = cal( ops, pre, current );
    stack.push( res );
  }

  return stack.reduce( ( acc, v ) => acc+v, 0 );

  function isNumeric( num: string ): boolean {
    const zero = '0'.charCodeAt( 0 ), nine = '9'.charCodeAt( 0 );
    const code = num.charCodeAt( 0 );
    return  code >= zero && code <= nine;
  }

  function cal( ops: string, pre: number, post: number ){
    switch( ops ){
      case '*': return pre * post;
      case '/': return pre / post | 0;
      case '+': return pre + post;
      case '-': return pre - post;
      default: throw Error( 'wrong operator!' );
    }
  }
}
// @lc code=end

