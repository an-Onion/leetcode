/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
export function combinationSum( candidates: number[], target: number ): number[][] {

  candidates.sort( ( a, b ) => a - b );

  function DFS( start: number, remaining: number ): number[][] {

    if ( remaining === 0 ) return [[]];
    const results: number[][] = [];

    for ( let i = start; i < candidates.length; i++ ) {
      if ( candidates[i] > remaining ) break;
      const subs = DFS( i, remaining - candidates[i] )
        .map( ( sub ) => sub.concat( candidates[i] ) );
      results.push( ...subs );
    }

    return results;

  }

  return DFS( 0, target );
}
// @lc code=end

