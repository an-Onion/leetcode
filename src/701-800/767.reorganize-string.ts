/*
 * @lc app=leetcode id=767 lang=typescript
 *
 * [767] Reorganize String
 */

// @lc code=start
export function reorganizeString( s: string ): string {

  const map: Record<string, number> = {};

  for( let i = 0; i < s.length; ++i ){
    const c = s[i];
    if( !map[c] ) map[c] = 0;
    map[c]++;
  }

  const sortedEntries = Object.entries( map ).sort( ( a, b ) => b[1] - a[1] );

  const half = s.length + 1 >> 1;

  if( sortedEntries[0][1] > half ) return '';

  let idx = 0;
  const res: string[] = [];

  for( const [key, val] of sortedEntries ){

    let count = val;

    while( count-- ){
      if( idx >= s.length ) idx = 1;
      res[idx] = key;
      idx +=  2;
    }

  }

  return res.join( '' );
}
// @lc code=end

