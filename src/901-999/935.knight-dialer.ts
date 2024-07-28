/*
 * @lc app=leetcode id=935 lang=typescript
 *
 * [935] Knight Dialer
 */

// @lc code=start
export function knightDialer( n: number ): number {

  const MOD = 10 ** 9 + 7;
  const dp: [number[], number[]] = [Array( 10 ).fill( 1 ), Array( 10 ).fill( 0 )];

  const next: Record<number, number[]> = {
    0:[4,6], 1:[6,8], 2:[7,9], 3:[4,8], 4:[0,3,9],
    5:[], 6:[0,1,7], 7:[2,6], 8:[1,3], 9:[2,4],
  };

  for( let j = 1; j < n; ++j ){
    dp[j & 1].fill( 0 );
    for( let i = 0; i <= 9; ++i ){
      for( const k of next[i] ){
        dp[j & 1][k] = ( dp[j & 1][k] + dp[j-1 & 1][i] ) % MOD;
      }
    }
  }

  return dp[n-1 & 1].reduce( ( acc, val ) => ( acc+val ) % MOD, 0 );
}
// @lc code=end

