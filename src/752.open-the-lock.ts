/*
 * @lc app=leetcode id=752 lang=typescript
 *
 * [752] Open the Lock
 */

// @lc code=start
export function openLock(deadends: string[], target: string): number {

  const queue: number[][] = [[0,0,0,0]];
  let level = 0;
  const visited: Record<string, boolean> = deadends.reduce(
    (acc, dead) => { acc[dead] = true; return acc; },
    {});

  while( queue.length ){

    let next = queue.length;

    while( next-- ){

      const top = queue.shift();
      const str = top.join('');

      if( visited[str] ) continue;

      visited[str] = true;

      if( str === target ) return level;

      for(let idx = 0; idx < 4; ++idx){
        const reverse = rotate(top, idx, true);

        if( !visited[reverse.join('')] ){
          queue.push( reverse );
        }

        const obverse = rotate(top, idx, false);

        if( !visited[obverse.join('')] ){
          queue.push( obverse );
        }
      }
    }
    level++;
  }

  return -1;


  function rotate(lock: number[], idx: number, reverse: boolean){
    const ret = [...lock];
    if( reverse ) ret[idx]--;
    else ret[idx]++;
    ret[idx] = (ret[idx] + 10) % 10;
    return ret;
  }
}
// @lc code=end

