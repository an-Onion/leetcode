/*
 * @lc app=leetcode id=809 lang=typescript
 *
 * [809] Expressive Words
 */

// @lc code=start
export function expressiveWords( s: string, words: string[] ): number {

  const target = sToArr( s );
  let ret = 0;

  outline: for( const word of words ) {
    const w = sToArr( word );

    if( w.length !== target.length ) continue;

    for( let i = 0; i < w.length; i++ ) {
      if( isNotStretchy( target[i], w[i] ) )
        continue outline;
    }

    ret++;
  }

  return ret;

  function isNotStretchy( A: [string, number], B: [string, number] ): boolean {
    return A[0] !== B[0] || ( A[1] < 3 && A[1] !== B[1] || A[1] < B[1] );
  }

  function sToArr( s: string ): [string, number][] {

    const arr: [string, number][] = [];
    let pre: [string, number];

    for( let i = 0; i < s.length; i++ ) {
      if( s[i] === pre?.[0] ){
        pre[1]++;
        continue;
      }
      if( pre ) arr.push( pre );
      pre = [s[i], 1];
    }

    arr.push( pre );
    return arr;
  }

}
// @lc code=end

