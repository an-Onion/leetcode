/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
export function groupAnagrams( strs: string[] ): string[][] {
  

  const map = new Map<string, string[]>();

  for( const s of strs ) {
    const key = toBits( s );
    if( !map.has( key ) ) {
      map.set( key, [] );
    }
    map.get( key )!.push( s );
  }

  return Array.from( map.values() );

  function toBits( s: string ): string {
    const bits = Array( 26 ).fill( 0 );
    for( let i = 0; i < s.length; i++ ) {
      const c = s.charCodeAt( i ) - 97;
      bits[c]++;
    }
    return bits.toString();
  }

}
// @lc code=end

