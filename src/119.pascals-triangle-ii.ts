/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
export function getRow( rowIndex: number ): number[] {

  const res = Array( rowIndex+1 ).fill( 0 );

  res[0] = 1;

  for( let i = 1; i <= rowIndex; i++ ) {
    for( let j = i; j >= 1; --j ){
      res[j] += res[j-1];
    }
  }

  return res;
}
// @lc code=end

