/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
export function removeDuplicates( nums: number[] ): number {
   let res = 0, limit = 0;

   for( let i = 0; i < nums.length; i++ ) {
     if( nums[i] !== nums[i-1] ) limit = 0;

     if( ++limit > 2 ) continue;

     nums[res++] = nums[i];
   }

   nums.length = res;

   return res;
}
// @lc code=end

