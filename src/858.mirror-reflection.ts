/*
 * @lc app=leetcode id=858 lang=typescript
 *
 * [858] Mirror Reflection
 */

// @lc code=start
export function mirrorReflection(p: number, q: number): number {

  const map = [[-1, 2], [0, 1]];

  const d = gcd(p, q);

  p = p / d % 2, q = q / d % 2;

  return map[p][q];

  function gcd(y: number, x: number): number {
    if( x === 0 ) return y;
    return gcd(x, y % x);
  }
}
// @lc code=end

