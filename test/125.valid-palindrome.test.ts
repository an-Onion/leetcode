import { isPalindrome } from '../src/125.valid-palindrome';

describe('Valid Palindrome', () => {
  it('A man, a plan, a canal: Panama', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });

  it('race a car', () => {
    expect(isPalindrome('race a car')).toBeFalsy();
  });
});
