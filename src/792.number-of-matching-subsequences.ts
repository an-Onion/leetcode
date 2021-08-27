/*
 * @lc app=leetcode id=792 lang=typescript
 *
 * [792] Number of Matching Subsequences
 */

// @lc code=start
export function numMatchingSubseq(s: string, words: string[]): number {

  const map: string[][] = Array(26).fill(0).map(() => []);

  words.forEach((w) => {
    const code = w.charCodeAt(0) - 'a'.charCodeAt(0);
    map[code].push(w);
  });

  let ret = 0;

  for(let i = 0; i < s.length; ++i){
    const code = getCode(s[i]);

    const queue = map[code];

    let size = queue.length;

    while(size--){

      const w = queue.shift();

      if( w.length === 1 ){
        ret++;
        continue;
      }

      const next = w.substring(1);
      map[getCode(next)].push(next);
    }

  }

  return ret;

  function getCode(w: string){
    return w.charCodeAt(0) - 'a'.charCodeAt(0);
  }
}
// @lc code=end

