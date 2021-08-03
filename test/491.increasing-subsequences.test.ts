import { findSubsequences } from '../src/491.increasing-subsequences';

describe('Increasing Subsequences', () => {

  it('nums = [4,6,7,7]', () => {
    const input = findSubsequences([4,6,7,7]).sort();
    const output = [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]].sort();
    expect(input).toStrictEqual(output);
  });

  it('nums = [4,4,3,2,1]', () => {
    const input = findSubsequences([4,4,3,2,1]).sort();
    const output = [[4,4]].sort();
    expect(input).toStrictEqual(output);
  });

});

