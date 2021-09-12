/*
 * @lc app=leetcode id=134 lang=typescript
 *
 * [134] Gas Station
 */

// @lc code=start
export function canCompleteCircuit( gas: number[], cost: number[] ): number {

  const N = gas.length;

  let start = N, end = 0, tank = 0, cur = 0;

  for( let i = 0; i < N; i++ ) {

    tank += gas[cur] - cost[cur];

    if( tank >= 0 )
      cur = ++end;
    else
      cur = --start;
  }


  return tank >= 0 ? ( start % N ) : -1;
}
// @lc code=end

