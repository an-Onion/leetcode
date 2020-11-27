/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
export function lengthOfLastWord(s: string): number {
  return s.trim().split(' ').pop()?.length || 0;
}
// @lc code=end
