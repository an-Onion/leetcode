/*
 * @lc app=leetcode id=945 lang=typescript
 *
 * [945] Minimum Increment to Make Array Unique
 */

// @lc code=start
export function minIncrementForUnique( nums: number[] ): number {

  const map: number[] = [];
  const min = Math.min( ...nums );

  for( const num of nums ){
    if( !map[num-min] )
      map[num-min] = 0;
    map[num-min]++;
  }

  let ret = 0;

  for( let i = 0; i < map.length; ++i ){
    if( !map[i] || map[i] === 1 ) continue;
    ret += map[i] - 1;
    map[i+1] = ( map[i+1] || 0 ) + map[i]-1;
  }

  return ret;

}
// @lc code=end

