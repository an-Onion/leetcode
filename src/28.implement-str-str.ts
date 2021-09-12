/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
export function strStr( haystack: string, needle: string ): number {

  if( needle === '' ) return 0;

  function getNext( p: string ): number[] {
    const next: number[] = [-1];
    let i = 0, j = -1;

    while( i < p.length ){
      if( j === -1 || p[i] === p[j] ){
        i++, j++;
        next.push( j );
      } else
        j = next[j];
    }
    return next;
  }

  function KMP( t: string, p: string ){
    const next: number[] = getNext( p );

    let i = 0 , j = 0;

    while( i < t.length && j < p.length ){

      if( j === -1 || t[i] === p[j] )
        i++, j++;
      else
         j = next[j];
    }

    return j === p.length ? i - j : -1;
  }

  return KMP( haystack, needle );
}
// @lc code=end

