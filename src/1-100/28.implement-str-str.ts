/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
export function strStr( haystack: string, needle: string ): number {

  if( needle === '' ) return 0;

  function getNext( p: string ): number[] {
    const next = Array( p.length ).fill( 0 );
    let i = 1, j = 0;

    while( i < p.length ) {
      if( p[i] === p[j] ){
        next[i++] = ++j;
        continue;
      }
      if( j === 0 ){
        i++; continue;
      }
      j = next[j - 1];
    }

    return next;
  }

  function KMP( s: string, p: string ): number {
    const next = getNext( p );
    let i = 0, j = 0;

    while( i < s.length && j < p.length ) {
      if( s[i] === p[j] ){
        i++, j++;
        continue;
      }
      if( j === 0 ){
        i++; continue;
      }
      j = next[j - 1];
    }
    return j === p.length ? i - j : -1;
  }

  return KMP( haystack, needle );
}
// @lc code=end

