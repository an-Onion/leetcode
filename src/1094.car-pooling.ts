/*
 * @lc app=leetcode id=1094 lang=typescript
 *
 * [1094] Car Pooling
 */

// @lc code=start
export function carPooling(trips: number[][], capacity: number): boolean {

  const stops: number[] = Array(1001).fill(0);

  for(const trip of trips) {
    stops[trip[1]] += trip[0];
    stops[trip[2]] -= trip[0];
  }

  for(let i = 0; i < 1001; ++i){
    capacity -= stops[i];
    if( capacity < 0 ) return false;
  }

  return true;
}
// @lc code=end

