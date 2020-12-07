/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
export function longestPalindrome(s: string): string {
  let sofar = '';

  for (let i = 0; i < s.length; i++) {
    let odd = s[i];
    for (let j = 1; i - j >= 0 && i + j < s.length; j++)
      if (s[i - j] === s[i + j])
        odd = s[i - j] + odd + s[i + j];
      else break;

    sofar = sofar.length >= odd.length ? sofar : odd;
  }

  for (let i = 0; i < s.length; i++) {
    let even = '';
    for (let j = 0; i - j >= 0 && i + 1 + j < s.length; ++j)
      if (s[i - j] === s[i + 1 + j])
        even = s[i - j] + even + s[i + 1 + j];
      else break;

    sofar = sofar.length >= even.length ? sofar : even;
  }

  return sofar;
}
// @lc code=end
