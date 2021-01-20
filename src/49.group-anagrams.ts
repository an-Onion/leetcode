/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
export function groupAnagrams(strs: string[]): string[][] {
  const skipList: Record<string,string[]> = {};

  for(let i = 0; i < strs.length; i++) {
    const idx: string = sToB(strs[i]);
    if( !skipList[idx] ) skipList[idx] = [];
    skipList[idx].push(strs[i]);
  }
  return Object.values(skipList);

  function sToB(str: string): string {
    return str.split('')
    .map((c) => c.charCodeAt(0) - 97)
    .reduce((acc, l) => {
      acc[l]++;
      return acc;
    }, Array(26).fill(0))
    .toString();
  }

}
// @lc code=end

