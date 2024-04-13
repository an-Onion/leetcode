/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
export function combinationSum2( candidates: number[], target: number ): number[][] {


  candidates.sort( ( a, b ) => a - b );

  function DFS( start: number, remaining: number ): number[][] {
    
    if( remaining < 0 ) return [];
    if( remaining === 0 ) return [[]];

    const result: number[][] = [];

    for( let i = start; i < candidates.length; i++ ) {
      if( i > start && candidates[i] === candidates[i - 1] ) continue; // skip duplicates
      const subs = DFS( i + 1, remaining - candidates[i] );
      subs.forEach( ( sub ) => sub.push( candidates[i] ) );
      result.push( ...subs );
    }
    return result;
  }

  return DFS( 0, target );
  
}
// @lc code=end

