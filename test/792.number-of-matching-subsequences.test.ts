import { numMatchingSubseq } from '../src/792.number-of-matching-subsequences';

describe('Number of Matching Subsequences', () => {

  it('e.g. 1', () => {
    const s = 'abcde', words = ['a','bb','acd','ace'];
    expect(numMatchingSubseq(s, words)).toEqual(3);
  });

  it('e.g. 2', () => {
    const s = 'dsahjpjauf', words = ['ahjpjau','ja','ahbwzgqnuk','tnmlanowax'];
    expect(numMatchingSubseq(s, words)).toEqual(2);
  });

});
