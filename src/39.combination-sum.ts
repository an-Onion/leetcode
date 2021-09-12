/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
export function combinationSum( candidates: number[], target: number ): number[][] {


  function DFS( start: number, t: number ): number[][]{

    if( t === 0 ) return [[]];

    const res: number[][] = [];

    for( let i = start; i < candidates.length; i++ ){

      if( t < candidates[i] ) continue;

      const sub = DFS( i, t-candidates[i] )
      .map( ( x ) => {
        x.push( candidates[i] );
        return x;
      } );

      res.push( ...sub );
    }
    return res;
  }

  return DFS( 0, target );
}
// @lc code=end

