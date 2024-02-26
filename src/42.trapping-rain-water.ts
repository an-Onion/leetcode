/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
export function trap( height: number[] ): number {

  let water = 0;

  const stack: number[] = [];

  for ( let i = 0; i < height.length; i++ ) {
    while( height[i] > height[stack.at( -1 )] ){
      const top = stack.pop();
      if( !stack.length ) break;

      const l = stack.at( -1 );
      const w = i - l - 1;
      const h = Math.min( height[l], height[i] ) - height[top];
      water += w * h;
    }
    stack.push( i );
  }

  return water;
}
// @lc code=end

