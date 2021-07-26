/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
export function sortedSquares(nums: number[]): number[] {

  let i = 0, j = nums.length-1;

  const output = [];
  while( i <= j ) {

    const head = nums[i] * nums[i], tail = nums[j] * nums[j];

    if( head > tail ) {
      output.push(head);
      i++;
    } else {
      output.push(tail);
      j--;
    }
  }
  return output.reverse();
}
// @lc code=end

