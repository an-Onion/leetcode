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

  let i = m-1, j = n-1;
  for( let k = m+n-1; k >= 0; k-- ){
    if( j < 0 ) break;
    if( i < 0 || nums1[i] < nums2[j] )
      nums1[k] = nums2[j--];
    else
      nums1[k] = nums1[i--];
  }
}
// @lc code=end

