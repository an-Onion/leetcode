/*
 * @lc app=leetcode id=223 lang=typescript
 *
 * [223] Rectangle Area
 */

// @lc code=start
export function computeArea( ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number ): number {

  const area = ( ax2 - ax1 ) * ( ay2 - ay1 ) + ( bx2 - bx1 ) * ( by2 - by1 );

  if( ax1 > bx2 || ax2 < bx1 || ay1 > by2 || ay2 < by1 )
    return area;

  const x = Math.min( ax2, bx2 ) - Math.max( ax1, bx1 );
  const y = Math.min( ay2, by2 ) - Math.max( ay1, by1 );

  return area - x * y;
}
// @lc code=end

