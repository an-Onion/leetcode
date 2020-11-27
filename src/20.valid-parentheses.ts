/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
export function isValid(s: string): boolean {
  const stack = [];

  const pairs: Record<string, string> = Object.freeze({ '(': ')', '[': ']', '{': '}' });

  for(const c of s){
    if( ['(', '[', '{'].includes(c) ){
      stack.push(c);
      continue;
    }
    const left = pairs[stack.pop()];

    if( left !== c ) return false;
  }

  return stack.length === 0;
}
// @lc code=end

