/*
 * @lc app=leetcode id=357 lang=typescript
 *
 * [357] Count Numbers with Unique Digits
 */

// @lc code=start
export function countNumbersWithUniqueDigits(n: number): number {

  if (n == 0) return 1;

  let res = 10, uniqueDigits = 9, availableNumber = 9;

  while (n-- > 1 && availableNumber > 0) {
    uniqueDigits = uniqueDigits * availableNumber;
    res += uniqueDigits;
    availableNumber--;
  }

  return res;
}
// @lc code=end

