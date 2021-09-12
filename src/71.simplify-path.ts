/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
export function simplifyPath( path: string ): string {

  const paths = path.split( '/' ).filter( p => p && p !== '.' );

  const res = [];

  for( const p of paths ){

    if( p !== '..' ){
      res.push( p );
      continue;
    }

    if( res.length ) res.pop();
  }

  return '/' + res.join( '/' );
}
// @lc code=end

