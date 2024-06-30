/*
 * @lc app=leetcode id=868 lang=typescript
 *
 * [868] Binary Gap
 */

// @lc code=start
export function binaryGap( n: number ): number {

  let ans = 0, sofar = -1;

  for( let i = 0; i <= 30; i++ ) {
    if( ! ( n & ( 1<<i ) ) ) continue;

    if( sofar >= 0 )
      ans = Math.max( ans, i-sofar );

    sofar = i;
  }

  return ans;
}
// @lc code=end

