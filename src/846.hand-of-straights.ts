/*
 * @lc app=leetcode id=846 lang=typescript
 *
 * [846] Hand of Straights
 */

// @lc code=start
export function isNStraightHand(hand: number[], groupSize: number): boolean {

  const counts = new Map<number, number>();

  hand.forEach((h) => {
    const c = counts.get(h) || 0;
    counts.set(h, c+1);
  });

  const keys = [...counts.keys()].sort((a,b) => a-b);

  for(const key of keys ){
    const val = counts.get(key);
    if( !val ) continue;
    if(val < 0 ) return false;
    for(let j = 1; j <groupSize; ++j){
      if( !counts.has(key+j) ) return false;
      counts.set(key+j, counts.get(key+j)-val);
    }
  }

  return true;
}
// @lc code=end

