/*
 * @lc app=leetcode id=718 lang=typescript
 *
 * [718] Maximum Length of Repeated Subarray
 */

// @lc code=start
export function findLength(nums1: number[], nums2: number[]): number {

  const dp = Array(nums1.length+1).fill(0).map(
    () => Array(nums2.length+1).fill(0)
  );

  let ret = 0;

  for(let i = nums1.length-1; i>=0; --i){
    for(let j = nums2.length-1; j>=0; --j ){
      if(nums1[i] === nums2[j])
        dp[i][j] = dp[i+1][j+1] + 1;
      ret = Math.max(ret, dp[i][j]);
    }
  }

  return ret;
}
// @lc code=end

