/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
export function letterCombinations(digits: string): string[] {
  const iToL: Record<string, string> = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz',
  };

  if(!digits) return [];

  function bfs(str): string[] {
    if( str.length === 1 ) return iToL[str].split('');
    const leading = iToL[str[0]].split('');

    return bfs( str.substring(1) )
    .reduce((acc, val) => {
      acc.push(...leading.map((l) => l+val));
      return acc;
    }, []);
  }

  return bfs(digits);
}
// @lc code=end

