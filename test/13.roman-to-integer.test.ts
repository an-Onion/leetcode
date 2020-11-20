import { romanToInt } from '../src/13.roman-to-integer';

describe('Roman to Integer', () => {
  it('3', () => {
    expect(romanToInt('III')).toBe(3);
  });

  it('4', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  it('9', () => {
    expect(romanToInt('IX')).toBe(9);
  });


  it('58', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  it('1994', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
