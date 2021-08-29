/*
 * @lc app=leetcode id=164 lang=typescript
 *
 * [164] Maximum Gap
 */

// @lc code=start
export function maximumGap(nums: number[]): number {

  let max = -1, min = Infinity;

  for(const num of nums) {
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  if( max === min ) return 0;

  const gap = Math.ceil( (max - min) / (nums.length-1) );
  const bucketMax = Array(nums.length-1).fill(-1);
  const bucketMin = Array(nums.length-1).fill(Infinity);

  for(const num of nums){
    if( num === max || num === min ) continue;
    const idx = (num-min) / gap | 0;
    bucketMax[idx] = Math.max(num, bucketMax[idx]);
    bucketMin[idx] = Math.min(num, bucketMin[idx]);
  }

  let pre = min, maxGap = 0;

  for(let i = 0; i < nums.length -1; ++i){
    if( bucketMax[i] === -1 ) continue;

    maxGap = Math.max(maxGap, bucketMin[i] - pre);
    pre = bucketMax[i];
  }

  maxGap = Math.max(maxGap, max - pre);

  return maxGap;
}
// @lc code=end

