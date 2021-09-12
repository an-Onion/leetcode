/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
export function dailyTemperatures( temperatures: number[] ): number[] {

  const res: number[] = Array( temperatures.length ).fill( 0 );
  const mono: number[] = [];

  for( let i = 0; i < temperatures.length; ++i ){
    while( monoPeek() < temperatures[i] ){
      const top = mono.pop();
      res[top] = i - top;
    }
    mono.push( i );
  }

  return res;

  function monoPeek(): number {
    if ( !mono.length ) return undefined;
    return temperatures[mono[mono.length-1]];
  }
}
// @lc code=end

