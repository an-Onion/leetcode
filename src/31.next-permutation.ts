/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
export function nextPermutation(nums: number[]): void {

  let [pre, next] = [-1, 0];
  for(let i = 1; i < nums.length; i++){
    if( nums[i] > nums[i-1] ){
      pre = i-1, next = i;
      continue;
    }

    if( nums[i] > nums[pre] ) next = i;
  }

  if( pre !== -1)
    [nums[pre], nums[next]] = [nums[next], nums[pre]];

  let [j, k] = [pre+1, nums.length-1];

  while( j < k){
    [nums[j], nums[k]] = [nums[k], nums[j]];
    j++, k--;
  }
}
// @lc code=end

