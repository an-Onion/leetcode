/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
export function intToRoman(num: number): string {
  type Args = {up: string, mid: string, low: string}

  function toRoman(n: number, { up, mid, low }: Args): string {
    if( n === 9 ) return low + up;
    if( n >= 5 ) return mid + low.repeat(n-5);
    if( n === 4 ) return low + mid;
    return low.repeat(n);
  }

  const Symbol: Record<number, Args> = {
    1000: { up: '', mid: '', low: 'M' },
    100: { up: 'M', mid: 'D', low: 'C' },
    10: { up: 'C', mid: 'L', low: 'X' },
    1: { up: 'X', mid: 'V', low: 'I' },
  };

  let res = '';

  for(const div of [1000, 100, 10 ,1]){
    const quotient = num / div | 0;
    res += toRoman(quotient, Symbol[div]);
    num %= div;
  }

  return res;
}
// @lc code=end

