/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
export function plusOne( digits: number[] ): number[] {
  digits.reverse();
  let carry = 1;
  const res = [];
  for( let i = 0; i < digits.length; i++ ){
    const sum = digits[i] + carry;
    res.push( sum % 10 );
    carry = sum / 10 | 0;
  }
  if( carry ) res.push( carry );
  return res.reverse();
}
// @lc code=end

