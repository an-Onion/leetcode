/*
 * @lc app=leetcode id=978 lang=typescript
 *
 * [978] Longest Turbulent Subarray
 */

// @lc code=start
export function maxTurbulenceSize( arr: number[] ): number {

  let [sofar, inc, dec] = [1,1,1];

  for( let i = 1; i < arr.length; i++ ) {

    if( arr[i] < arr[i-1] ){
      dec = inc + 1;
      inc = 1;
    } else if( arr[i] > arr[i-1] ){
      inc = dec + 1;
      dec = 1;
    } else {
      inc = dec = 1;
    }

    sofar = Math.max( sofar, inc, dec );
  }
  return sofar;
}
// @lc code=end

