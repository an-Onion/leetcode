/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
export function insert( intervals: number[][], newInterval: number[] ): number[][] {

  let start = intervals.findIndex( ( v ) => v[1] >= newInterval[0] );
  
  if( start === -1 ) {
    start = intervals.length;
  }

  let end = intervals.findIndex( ( v ) => v[0] > newInterval[1] );
  
  if( end === -1 ){
    end = intervals.length;
  }

  
  for( let i = start; i < end; i++ ) {
    newInterval[0] = Math.min( newInterval[0], intervals[i][0] );
    newInterval[1] = Math.max( newInterval[1], intervals[i][1] );
  }
  intervals.splice( start, end - start, newInterval );
  return intervals;
}
// @lc code=end

