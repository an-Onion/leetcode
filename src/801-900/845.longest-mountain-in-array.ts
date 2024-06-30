/*
 * @lc app=leetcode id=845 lang=typescript
 *
 * [845] Longest Mountain in Array
 */

// @lc code=start
export function longestMountain( arr: number[] ): number {

  let inc = 0, dec = 0 , sofar = 0;

  for( let i = 1; i < arr.length; ++i ){
    if( arr[i] === arr[i-1] ){
      inc = dec = 0;
    } else if( arr[i] > arr[i-1] ){
      if( dec !== 0 ){
        dec = 0, inc = 0;
      }
      inc++;
    }else {
      if( inc === 0 ) continue;
      dec++;
    }
    const mount = dec === 0 ? 0 : inc+dec+1;
    sofar = Math.max( sofar, mount );
  }
  return sofar;
}
// @lc code=end

