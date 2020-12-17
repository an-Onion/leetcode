import { splitArray } from '../src/410.split-array-largest-sum';

describe('Split Array Largest Sum', () => {
  it('nums = [7,2,5,10,8], m = 2', () => {
    expect(splitArray([7,2,5,10,8], 2)).toBe(18);
  });

  it('nums = [1,2,3,4,5], m = 2', () => {
    expect(splitArray([1,2,3,4,5], 2)).toBe(9);
  });

  it('nums = [1,4,4], m = 3', () => {
    expect(splitArray([1,4,4], 3)).toBe(4);
  });
});
