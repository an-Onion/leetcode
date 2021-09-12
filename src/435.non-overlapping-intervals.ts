/*
 * @lc app=leetcode id=435 lang=typescript
 *
 * [435] Non-overlapping Intervals
 */

// @lc code=start
export function eraseOverlapIntervals( intervals: number[][] ): number {

  if( !intervals.length ) return 0;

  intervals.sort( ( i1: number[], i2: number[] ) => i1[1] - i2[1] );

  let sofar = intervals[0][1], count = 1;

  for( let i = 1; i < intervals.length; i++ ) {
    if( intervals[i][0] < sofar ) continue;

    sofar = intervals[i][1];
    count++;
  }

  return intervals.length - count;
}
// @lc code=end

