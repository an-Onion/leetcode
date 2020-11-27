import { countAndSay } from '../src/38.count-and-say';

describe('Count and Say', () => {
  it('1', () => {
    expect(countAndSay(1)).toBe('1');
  });

  it('4', () => {
    expect(countAndSay(4)).toBe('1211');
  });
});
