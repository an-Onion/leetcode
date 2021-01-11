/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
export function divide(dividend: number, divisor: number): number {
  if( dividend === 0 ) return 0;

  const leftShift = (a, i) => (a << i) === -2147483648 ? 2147483648: (a << i);

  let dd = Math.abs(dividend);
  const dr = Math.abs(divisor);
  let i = 0;

  for(let up = dr; up > 0 && dd > up; up = leftShift(up, 1) ) i++;

  let quotient = 0;

  while(dd >= dr){
    const up = leftShift(dr, i);
    if( up > 0 && dd >= up ){
      quotient += leftShift(1, i);
      dd -= up;
    }
    i--;
  }

  return Math.sign(divisor) === Math.sign(dividend) ? Math.min(quotient, 2147483647) : -quotient;
}
// @lc code=end

