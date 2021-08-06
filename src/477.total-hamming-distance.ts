/*
 * @lc app=leetcode id=477 lang=typescript
 *
 * [477] Total Hamming Distance
 */

// @lc code=start
export function totalHammingDistance(nums: number[]): number {


  const bitmap: number[] = Array(32).fill(0);

  for(const num of nums) {
    for(let i = 0; i < 32; i++) {
      if( num & (1<<i) )
        bitmap[i]++;
    }
  }

  return bitmap.reduce((acc, k) => acc + k*(nums.length-k), 0);
}
// @lc code=end

