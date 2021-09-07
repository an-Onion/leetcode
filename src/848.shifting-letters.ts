/*
 * @lc app=leetcode id=848 lang=typescript
 *
 * [848] Shifting Letters
 */

// @lc code=start
export function shiftingLetters(s: string, shifts: number[]): string {

  let sum = 0;
  for(let i = shifts.length-1; i >= 0; i--) {
    sum = (sum + shifts[i]) % 26;
    shifts[i] = sum;
  }

  const ret: string[] = [];
  const basic = 'a'.charCodeAt(0);

  for(let i = 0; i < s.length; ++i){
    const delta = s[i].charCodeAt(0) - basic;
    const code = (delta+shifts[i]) % 26 + basic;
    ret.push( String.fromCharCode(code) );
  }
  return ret.join('');
}
// @lc code=end

