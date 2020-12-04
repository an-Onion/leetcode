import { lengthOfLongestSubstring } from '../src/3.longest-substring-without-repeating-characters';

describe('Longest Substring Without Repeating Characters', () => {
  it('abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('[empty]', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
});
