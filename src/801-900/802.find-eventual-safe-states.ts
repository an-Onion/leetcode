/*
 * @lc app=leetcode id=802 lang=typescript
 *
 * [802] Find Eventual Safe States
 */

// @lc code=start
export function eventualSafeNodes( graph: number[][] ): number[] {

  const color: number[] = Array( graph.length ).fill( 0 );

  const ret: number[] = [];

  for( let i = 0; i < graph.length; i++ ) {
    if( DFS( i ) ) ret.push( i );
  }

  return ret;

  function DFS( start: number ): boolean {

    if( color[start] ) return color[start] === 1;

    color[start] = 2;

    for( const next of graph[start] ) {
      if( !DFS( next ) ) return false;
    }

    color[start] = 1;
    return true;
  }
}
// @lc code=end

