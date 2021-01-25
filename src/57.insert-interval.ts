/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
export function insert(intervals: number[][], newInterval: number[]): number[][] {

  const start = bsStart(), end = bsEnd();

  const overlap = [
    Math.min(newInterval[0], intervals[start]?.[0] ?? 100000),
    Math.max(newInterval[1], intervals[end]?.[1] ?? 0),
  ];

  intervals.splice(start, end-start+1, overlap);

  return intervals;

  function bsStart(){
    let [low, up] = [0, intervals.length-1];
    while( low <= up ){
      const mid = low+up >> 1;
      if( intervals[mid][1] >= newInterval[0] ) up = mid -1;
      else low = mid + 1;
    }

    return low;
  }

  function bsEnd(){
    let [low, up] = [0, intervals.length-1];
    while( low <= up ){
      const mid = low+up >> 1;
      if( intervals[mid][0] <= newInterval[1] ) low = mid + 1;
      else up = mid - 1;
    }

    return up;
  }
}
// @lc code=end

