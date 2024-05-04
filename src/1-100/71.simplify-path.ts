/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
export function simplifyPath( path: string ): string {

  const paths = path.split( '/' );

  const ret: string[] = [];

  for( const p of paths ){
    if( p=='' || p==='.' ){
      continue;
    }
    if( p==='..' ){
      ret.pop();
      continue;
    }
    ret.push( p );
  }

  return '/' + ret.join( '/' );

}
// @lc code=end

