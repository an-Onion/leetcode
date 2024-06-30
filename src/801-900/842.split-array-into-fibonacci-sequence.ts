/*
 * @lc app=leetcode id=842 lang=typescript
 *
 * [842] Split Array into Fibonacci Sequence
 */

// @lc code=start
export function splitIntoFibonacci( num: string ): number[] {
  const ret: number[] = [];
  DFS( 0, ret );
  return ret;

  function DFS( start: number, fibs: number[] ): boolean {

    if( fibs.length >= 3 ){
      const [a,b,c] = fibs.slice( -3 );
      if( a+b !== c ) return false;
    }

    if( start === num.length ) return fibs.length >= 3;

    for( let i = start; i < num.length; ++i ){
      if( num[start] === '0' && i > start ) break;

      const next = parseInt( num.substring( start, i+1 ) );
      if( next > 2147483647 ) break;
      fibs.push( next );
      if( DFS( i+1, fibs ) ) return true;
      fibs.pop();
    }

    return false;
  }

}
// @lc code=end

