/*
 * @lc app=leetcode id=164 lang=typescript
 *
 * [164] Maximum Gap
 */

// @lc code=start
export function maximumGap( nums: number[] ): number {

  if( nums.length < 2 ) return 0;

  const min = Math.min( ...nums );
  const max = Math.max( ...nums );
  const delta = Math.floor( ( max - min ) / ( nums.length - 1 ) ) || 1;
  const bucketSize = Math.floor( ( max - min ) / delta ) + 1;

  const buckets = Array.from( { length: bucketSize }, () => [Infinity, -Infinity] );

  for( const num of nums ) {
    const idx = Math.floor( ( num - min ) / delta );
    buckets[idx][0] = Math.min( buckets[idx][0], num );
    buckets[idx][1] = Math.max( buckets[idx][1], num );
  }
  let [gap, prev] = [0, min];

  for( const [min, max] of buckets ) {
    if( min === Infinity ) continue;

    gap = Math.max( gap, min - prev );
    prev = max;
  }

  return gap;

}
// @lc code=end

