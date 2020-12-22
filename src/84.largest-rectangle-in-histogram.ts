/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
export function largestRectangleArea(heights: number[]): number {

  const tail: () => number = () => stack[stack.length-1] ?? -1;

  let sofar = 0;

  heights.push(0);

  const stack = [];

  for(let i = 0; i < heights.length; i++) {

    while( heights[tail()] >= heights[i] ){
      const h = heights[tail()];
      stack.pop();
      const w = i - tail()  - 1;
      sofar = Math.max(sofar, h * w);
    }

    stack.push(i);
  }
  return sofar;
}
// @lc code=end

