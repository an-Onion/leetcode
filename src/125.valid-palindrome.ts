/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
export function isPalindrome(s: string): boolean {

  const regex = /[^a-z0-9]/ig;

  const parse:string = s.replace(regex, '').toLocaleLowerCase();

  const len = parse.length;
  for(let i = 0; i < len / 2; i++) {
    if( parse[i] !== parse[len-1-i] )
      return false;
  }

  return true;
}
// @lc code=end

