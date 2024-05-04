/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
export function removeDuplicates( nums: number[] ): number {

  function swap( i: number, j: number ): void {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let [prev, win, k] = [undefined, 0, 0];

  for( let i = 0; i < nums.length; i++ ) {
    if( nums[i] !== prev ){
      prev = nums[i];
      win = 1;
      swap( k++, i );
      continue;
    }
    win++;

    if( win <= 2 ) {
      swap( k++, i );
    }
  }

  return k;
}
// @lc code=end

