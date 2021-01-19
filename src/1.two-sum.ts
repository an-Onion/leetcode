/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function twoSum(nums: number[], target: number): number[] {
    const myMap = new Map();
    for(let i = 0; i < nums.length; ++i){
      const num = nums[i];

      if( myMap.has(target-num) ){
        return [myMap.get(target-num), i];
      }

      myMap.set(num, i);
    }
    return [];
}
// @lc code=end

