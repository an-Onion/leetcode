import { countNumbersWithUniqueDigits } from '../src/357.count-numbers-with-unique-digits';

describe('Count Numbers with Unique Digits', () => {

  it('n = 2', () => {
    expect(countNumbersWithUniqueDigits(2)).toBe(91);
  });

  it('n = 0', () => {
    expect(countNumbersWithUniqueDigits(0)).toBe(1);
  });

});
