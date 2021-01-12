import { nextPermutation } from '../src/31.next-permutation';

describe('Next Permutation', () => {

  it('[2,3,1,3,3]', () => {
    const input = [2,3,1,3,3];
    nextPermutation(input);
    expect(input).toStrictEqual([2,3,3,1,3]);
  });

  it('[1,2,3]', () => {
    const input = [1,2,3];
    nextPermutation(input);
    expect(input).toStrictEqual([1,3,2]);
  });

  it('[3,2,1]', () => {
    const input = [3,2,1];
    nextPermutation(input);
    expect(input).toStrictEqual([1,2,3]);
  });

  it('[1,1,5]', () => {
    const input = [1,1,5];
    nextPermutation(input);
    expect(input).toStrictEqual([1,5,1]);
  });

  it('[1]', () => {
    const input = [1];
    nextPermutation(input);
    expect(input).toStrictEqual([1]);
  });

});
