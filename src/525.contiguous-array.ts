/*
 * @lc app=leetcode id=525 lang=typescript
 *
 * [525] Contiguous Array
 */

// @lc code=start
export function findMaxLength(nums: number[]): number {

  const map: Map<number, number> = new Map([[0, -1]]);
  let sum = 0, sofar = 0;

  for(let idx = 0; idx < nums.length; ++idx){
    sum += nums[idx] ? 1: -1;

    if( !map.has(sum) ){
      map.set(sum, idx);
      continue;
    }
    const candidate = idx - map.get(sum);
    sofar = Math.max(sofar, candidate);
  }

  return sofar;

}
// @lc code=end

