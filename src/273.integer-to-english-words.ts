/*
 * @lc app=leetcode id=273 lang=typescript
 *
 * [273] Integer to English Words
 */

// @lc code=start
export function numberToWords(num: number): string {

  if( !num ) return 'Zero';

  const LESS_THAN_20 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const THOUSANDS = ['', 'Thousand', 'Million', 'Billion'];

  function parse(n: number): string {
    if( !n )
      return '';

    if( n < 20 )
      return LESS_THAN_20[n];

      if( n < 100 )
      return `${TENS[n / 10 | 0]} ${parse(n % 10)}`;

    return `${LESS_THAN_20[n / 100 | 0]} Hundred ${parse(n % 100)}`;
  }

  let res ='';
  for(let i = 0; num !== 0; ++i){
    if( num % 1000 !== 0)
      res = `${parse(num % 1000).trim()} ${THOUSANDS[i]} `+res;
    num = num / 1000 | 0;
  }

  return res.trim();
}
// @lc code=end

