/*
 * @lc app=leetcode id=403 lang=typescript
 *
 * [403] Frog Jump
 */

// @lc code=start
export function canCross( stones: number[] ): boolean {

  const dp = Array( stones.length )
                .fill( 0 )
                .map( () => Array( stones.length+1 ).fill( 0 ) );

  const map = new Map<number, number>();

  for( let i = 0; i <stones.length; i++ ) {
    map.set( stones[i], i );
  }

  dp[0][0] = 1;

  for( let i = 1; i < stones.length; i++ ) {
    for( let k = 1; k <= i; k++ ){
      const pre = map.get( stones[i]-k );
      if( pre === undefined ) continue;
      dp[i][k] = dp[pre][k-1] + dp[pre][k] + dp[pre][k+1];
    }
  }
  return Math.max( ...dp[dp.length-1] ) !== 0;

}
// @lc code=end

