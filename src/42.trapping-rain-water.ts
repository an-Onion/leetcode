/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
export function trap( height: number[] ): number {

  let l = 0, r = height.length -1;
  let [L, R, water] = [0,0,0];
  while( l < r ) {
    L = Math.max( L, height[l] );
    R = Math.max( R, height[r] );
    if( L < R )
      water += L - height[l++];
    else
      water += R - height[r--];
  }

  return water;
}
// @lc code=end

