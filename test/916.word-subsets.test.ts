import { wordSubsets } from '../src/916.word-subsets';

describe('Word Subsets', () => {

  it('e.g. 1', () => {
    const words1 = ['amazon','apple','facebook','google','leetcode'], words2 = ['e','o'];
    expect(wordSubsets(words1, words2)).toStrictEqual(['facebook','google','leetcode']);
  });

  it('e.g. 2', () => {
    const words1 = ['amazon','apple','facebook','google','leetcode'], words2 = ['l','e'];
    expect(wordSubsets(words1, words2)).toStrictEqual(['apple','google','leetcode']);
  });

  it('e.g. 3', () => {
    const words1 = ['amazon','apple','facebook','google','leetcode'], words2 = ['e','oo'];
    expect(wordSubsets(words1, words2)).toStrictEqual(['facebook','google']);
  });

  it('e.g. 4', () => {
    const words1 = ['amazon','apple','facebook','google','leetcode'], words2 = ['lo','eo'];
    expect(wordSubsets(words1, words2)).toStrictEqual(['google','leetcode']);
  });

  it('e.g. 5', () => {
    const words1 = ['amazon','apple','facebook','google','leetcode'], words2 = ['ec','oc','ceo'];
    expect(wordSubsets(words1, words2)).toStrictEqual(['facebook','leetcode']);
  });

});
