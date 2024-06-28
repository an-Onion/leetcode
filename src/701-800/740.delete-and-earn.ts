/*
 * @lc app=leetcode id=740 lang=typescript
 *
 * [740] Delete and Earn
 */

// @lc code=start
export function deleteAndEarn( nums: number[] ): number {

  const count = [];

  for( const num of nums ) {
    if( !count[num] ) count[num] = 1;
    else count[num]++;
  }

  let avoid = 0, using = 0;

  for( let i = 1; i < count.length; ++i ){
    const max = Math.max( avoid, using );
    if( count[i] ){
      using = avoid + count[i] * i;
    }
    avoid = max;
  }

  return Math.max( avoid, using );
}
// @lc code=end

