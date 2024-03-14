/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge( nums1: number[], m: number, nums2: number[], n: number ): void {

  let total = m + n;

  while( total-- ){
    nums1[total] = nums1[m-1] > ( nums2[n-1] ?? -Infinity ) ? nums1[--m] : nums2[--n];
  }
}
// @lc code=end

