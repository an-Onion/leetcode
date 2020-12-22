/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
export function maxArea(height: number[]): number {
  let [l,r] = [0, height.length-1];

  let sofar = 0;
  while(l < r){
    const area = Math.min(height[l], height[r]) * (r-l);
    sofar = Math.max(sofar, area);
    if( height[l] < height[r]) l++;
    else if( height[l] === height[r] ) r--, l++;
    else r--;
  }

  return sofar;
}
// @lc code=end

