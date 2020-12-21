/*
 * @lc app=leetcode id=452 lang=typescript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
export function findMinArrowShots(points: number[][]): number {

  points.sort((a: number[], b: number[]) => b[0] !== a[0] ? b[0] - a[0] : b[1] - a[1]);

  let target = [-Infinity, -Infinity];
  let res = 0;
  while( points.length ) {
    const tail = points.pop();
    if( tail[0] <= target[1] ){
      target = [Math.max(target[0], tail[0]), Math.min(target[1], tail[1])];
      continue;
    }
    res++, target = tail;
  }

  return res;
}
// @lc code=end

