/*
 * @lc app=leetcode id=436 lang=typescript
 *
 * [436] Find Right Interval
 */

// @lc code=start
export function findRightInterval(intervals: number[][]): number[] {


  const sortedIntervals: number[][] = intervals
                                        .map((interval, idx) => [...interval, idx])
                                        .sort((a, b) => a[0] - b[0]);

  const bsUpBound = (target: number): number => {
    let l = 0, u = sortedIntervals.length-1;

    while( l <= u ){
      const m = l+u >> 1;
      const val = sortedIntervals[m][0];
      if( val >= target ) u = m-1;
      else l = m+1;
    }
    return l >= sortedIntervals.length ? -1 : sortedIntervals[l][2];
  };

  return intervals.map(([, end]) => bsUpBound(end));
}
// @lc code=end

