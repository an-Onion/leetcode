/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
export function merge( intervals: number[][] ): number[][] {

  intervals.sort( ( a, b ) => a[0] - b[0] );

  const ret = [ intervals[0] ];

  for ( let i = 1; i < intervals.length; i++ ) {
    if ( ret.at( -1 )[1] < intervals[i][0] ) {
      ret.push( intervals[i] );
      continue;
    }

    const rear = ret.pop();
    ret.push( [ rear[0], Math.max( rear[1], intervals[i][1] ) ] );
  }
  return ret;
}
// @lc code=end

