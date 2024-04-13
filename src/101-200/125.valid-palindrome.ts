/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
export function isPalindrome( s: string ): boolean {

  const regex = /[^a-z0-9]/ig;

  const parsed = s.toLocaleLowerCase().replace( regex, '' );
  
  const reversed = parsed.split( '' ).reverse().join( '' );
  return parsed === reversed;
}
// @lc code=end

