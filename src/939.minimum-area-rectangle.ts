/*
 * @lc app=leetcode id=939 lang=typescript
 *
 * [939] Minimum Area Rectangle
 */

// @lc code=start
export function minAreaRect(points: number[][]): number {

  const map: Map<number, Set<number>> = new Map();

  for(const [x,y] of points){
    if( !map.has(x) ) map.set(x, new Set<number>());
    map.get(x).add(y);
  }

  let ret = Infinity;

  for(const [x1, y1] of points){
    for(const [x2, y2] of points){
      if( x1 === x2 || y1 === y2 ) continue;
      if( map.get(x1).has(y2) && map.get(x2).has(y1) ){
        const area = Math.abs( (x1 - x2) * (y1 - y2));
        ret = Math.min(ret, area);
      }
    }
  }

  return ret === Infinity ? 0 : ret;
}
// @lc code=end

