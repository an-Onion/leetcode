/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
export function lengthOfLongestSubstring(s: string): number {

  const pre: number[] = [];
  let [sofar, end] = [0,0];

  for(let i = 0; i < s.length; i++){
    const ascii = s[i].charCodeAt(0);
    const last = pre[ascii] ?? -1;
    end = last + end >= i ? (i - last) : (end + 1);

    sofar = Math.max(sofar, end);
    pre[ascii] = i;
  }

  return sofar;
}
// @lc code=end

