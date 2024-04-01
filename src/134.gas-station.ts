/*
 * @lc app=leetcode id=134 lang=typescript
 *
 * [134] Gas Station
 */

// @lc code=start
export function canCompleteCircuit( gas: number[], cost: number[] ): number {

  const N = gas.length;
  let [start, end, tank] = [N, 0, 0];

  while ( start > end ) {
    if( tank >= 0 ){
      tank += gas[end] - cost[end];
      end++;
      continue;
    }
    start--;
    tank += gas[start] - cost[start];
  }
  return tank >= 0 ? ( start % N ) : -1;
}
// @lc code=end

