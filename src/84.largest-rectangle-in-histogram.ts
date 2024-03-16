/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
export function largestRectangleArea( heights: number[] ): number {

  const mono: number[] = [-1];
    
  heights.push( 0 );
  let maxArea = 0;
  for( let i = 0; i < heights.length; i++ ){
      while( heights[mono.at( -1 )] > heights[i] ) {
          const h = mono.pop();
          const w = i - mono.at( -1 ) - 1;
          maxArea = Math.max( maxArea, heights[h] * w );
      }
      mono.push( i );
  }
  
  return maxArea;
}
// @lc code=end

