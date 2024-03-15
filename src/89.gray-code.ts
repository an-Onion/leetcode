/*
 * @lc app=leetcode id=89 lang=typescript
 *
 * [89] Gray Code
 */

// @lc code=start
export function grayCode( n: number ): number[] {
  const result: number[] = [0,1];

  for( let i = 1; i < n; i++ ){
    const size = result.length;
    for( let j = size - 1; j >= 0; j-- ){
      result.push( result[j] + ( 1 << ( i ) ) );
    }
  }

  return result;
}
// @lc code=end

