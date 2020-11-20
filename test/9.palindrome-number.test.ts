import { isPalindrome } from '../src/9.palindrome-number';

describe('is Palindrome', () => {
  it('not negative', () => {
    expect(isPalindrome(-121)).toBeFalsy();
    expect(isPalindrome(-101)).toBeFalsy();
  });

  it('not Palindrome', () => {
    expect(isPalindrome(10)).toBeFalsy();
    expect(isPalindrome(100)).toBeFalsy();
    expect(isPalindrome(102)).toBeFalsy();
    expect(isPalindrome(201)).toBeFalsy();
  });

  it('Even Palindrome', () => {
    expect(isPalindrome(101)).toBeTruthy();
    expect(isPalindrome(1)).toBeTruthy();
  });

  it('Odd Palindrome', () => {
    expect(isPalindrome(1221)).toBeTruthy();
    expect(isPalindrome(11)).toBeTruthy();
  });
});
