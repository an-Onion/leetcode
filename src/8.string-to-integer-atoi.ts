/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
export function myAtoi(s: string): number {

  const regex = /([+-]?)([0-9]*)(\D*)(\.*)/g;

  const match = regex.exec(s.trim());

  const [, sign, numeric] = match;

  if( !numeric ) return 0;

  let res = 0;

  for(const c of numeric){
    const cur: number = c.charCodeAt(0) - 48;
    res = 10*res + cur;
  }

  if( sign === '-' )
    return Math.max(-2147483648, -res);

  return Math.min(2147483647, res);
}
// @lc code=end

