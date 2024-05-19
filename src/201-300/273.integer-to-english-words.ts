/*
 * @lc app=leetcode id=273 lang=typescript
 *
 * [273] Integer to English Words
 */

// @lc code=start
export function numberToWords( num: number ): string {

  if( !num ) return 'Zero';

  const LESS_THAN_20 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const THOUSANDS = ['', 'Thousand', 'Million', 'Billion'];

  // n < 1000
  function parseLessThan1000( n: number ): string[] {
    if( n < 20 ) return [LESS_THAN_20[n]];
    if( n < 100 ) return [...parseLessThan1000( n % 10 ), TENS[n / 10 | 0] ];
    return [...parseLessThan1000( n % 100 ), 'Hundred', LESS_THAN_20[n / 100 | 0]];
  }

  const ret = [];

  for( let i = 0; num > 0; i++ ){
    const part = num % 1000;
    if( part > 0 ){
      ret.push( THOUSANDS[i], ...parseLessThan1000( part ) );
    }

    num = num / 1000 | 0;
  }
  return ret.filter( s => s !== '' ).reverse().join( ' ' );
}
// @lc code=end

