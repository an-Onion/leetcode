import { characterReplacement } from '../src/424.longest-repeating-character-replacement';

describe('Longest Repeating Character Replacement', () => {

  it('e.g. 1', () => {
    const s = 'ABAB', k = 2;
    expect(characterReplacement(s, k)).toBe(4);
  });

  it('e.g. 2', () => {
    const s = 'AABABBA', k = 1;
    expect(characterReplacement(s, k)).toBe(4);
  });

});
