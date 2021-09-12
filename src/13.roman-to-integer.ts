/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
export function romanToInt( s: string ): number {

  const symbols: Record<string, number> = Object.freeze( {
    I: 1,  V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  } );

  let pre = 'M', sum = 0;

  for( const cur of s ){
    if( symbols[cur] <= symbols[pre] ) {
      sum += symbols[cur];
    } else {
      sum += ( symbols[cur] - 2 * symbols[pre] );
    }

    pre = cur;
  }
  return sum;
}
// @lc code=end

