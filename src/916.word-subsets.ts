/*
 * @lc app=leetcode id=916 lang=typescript
 *
 * [916] Word Subsets
 */

// @lc code=start
export function wordSubsets(words1: string[], words2: string[]): string[] {

  const unions = Array(26).fill(0);

  for(const word of words2){
    const count: number[] = getCount(word);
    for(let i = 0; i < 26; ++i){
      if( unions[i] < count[i] )
        unions[i] = count[i];
    }
  }

  const ret: string[] = [];

  search: for(const word of words1){
    const count: number[] = getCount(word);

    for(let i = 0; i < 26; ++i){
      if(count[i] < unions[i]){
        continue search;
      }
    }

    ret.push(word);
  }

  return ret;

  function getCount(word: string): number[] {
    const codes: number[] = Array(26).fill(0);
    for(let i = 0; i < word.length; ++i){
      const code = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
      codes[code]++;
    }
    return codes;
  }
}
// @lc code=end

