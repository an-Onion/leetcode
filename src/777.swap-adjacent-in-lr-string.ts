/*
 * @lc app=leetcode id=777 lang=typescript
 *
 * [777] Swap Adjacent in LR String
 */

// @lc code=start
export function canTransform(start: string, end: string): boolean {

  if( start.length !== end.length ) return false;
  const N = start.length;
  let [sX, eX, i, j] = [0, 0, 0, 0];

  while( i < N || j < N ){

    while( start[i] === 'X' ){
      i++, sX++;
    }

    while( end[j] === 'X' ){
      j++, eX++;
    }

    if( start[i] !== end[j] ) return false;

    if( start[i] === 'L' && i < j ) return false;

    if( start[i] === 'R' && i > j ) return false;

    i++, j++;
  }

  if( i !== j ) return false;
  if( sX !== eX ) return false;
  return true;
}
// @lc code=end

