/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
export function combinationSum2( candidates: number[], target: number ): number[][] {

  candidates.sort( ( a,b ) => a - b );

  return DFS( 0, target );

  function DFS( start: number, left: number ): number[][] {
    if( left < 0 ) return [];
    if( left === 0 ) return [[]];

    const res: number[][] = [];
    for( let i = start; i < candidates.length; ++i ){
      if( i > start && candidates[i] === candidates[i-1] ) continue;
      const sub = DFS( i+1, left-candidates[i] ).map( ( x ) => {x.push( candidates[i] ); return x;} );
      res.push( ...sub );
    }

    return res;
  }
}
// @lc code=end

