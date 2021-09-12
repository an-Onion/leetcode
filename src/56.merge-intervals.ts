/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
export function merge( intervals: number[][] ): number[][] {

  intervals.sort( ( a: number[], b: number[] ) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  } );

  const res: number[][] = [];
  res.push( intervals[0] );

  for( let i = 1; i < intervals.length; i++ ){
    const tail = res[res.length - 1];
    const cur  = intervals[i];
    if( cur[0] > tail[1] ) res.push( cur );
    else tail[1] = Math.max( cur[1], tail[1] );
  }

  return res;
}
// @lc code=end

