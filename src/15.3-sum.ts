/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  function twoSum( target: number, low: number, up: number ): number[] | undefined {
    while (low < up) {
      const sum = nums[low] + nums[up];
      if (sum > target) up--;
      else if (sum < target) low++;
      else return [low, up];
    }
    return [0, 0];
  }

  nums.sort((a, b) => a - b);

  const res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let [low, up] = [i + 1, nums.length - 1];

    while (low < up) {
      [low, up] = twoSum(-nums[i], low, up);
      if (low >= up) break;

      res.push([nums[i], nums[low++], nums[up--]]);
      while (nums[low] === nums[low - 1]) low++;
      while (nums[up] === nums[up + 1]) up--;
    }
  }

  return res;
}
// @lc code=end
