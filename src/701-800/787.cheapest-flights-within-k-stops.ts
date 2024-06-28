/*
 * @lc app=leetcode id=787 lang=typescript
 *
 * [787] Cheapest Flights Within K Stops
 */

// @lc code=start
export function findCheapestPrice( n: number, flights: number[][], src: number, dst: number, k: number ): number {

  const dp = Array( k+2 ).fill( 0 ).map( () => Array( n ).fill( Infinity ) );

  for( let i = 0; i <= k+1; ++i ){
    dp[i][src] = 0;
  }

  for( let i = 1; i <= k+1; ++i ){
    for( const [f, t, p] of flights ){
      if( dp[i-1][f] !== Infinity ){
        dp[i][t] = Math.min( dp[i][t], dp[i-1][f]+p );
      }
    }
  }
  return dp[k+1][dst] === Infinity ? -1 : dp[k+1][dst];
}
// @lc code=end

