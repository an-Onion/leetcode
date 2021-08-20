/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
export function characterReplacement(s: string, k: number): number {

  let maxCount = 0, start = 0;
  const count: number[] = Array(26).fill(0);

  for(let end = 0; end < s.length; end++) {
    const endCode = s[end].charCodeAt(0) - 'A'.charCodeAt(0);

    maxCount = Math.max(maxCount, ++count[endCode]);

    if( end - start + 1  > k + maxCount){
      const startCode = s[start].charCodeAt(0) - 'A'.charCodeAt(0);
      count[startCode]--;
      start++;
    }
  }
  return s.length - start;
}
// @lc code=end

