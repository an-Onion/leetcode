import { subarraysDivByK } from '../src/974.subarray-sums-divisible-by-k';

describe('Subarray Sums Divisible by K', () => {

  it('e.g. 1', () => {
    const nums = [4,5,0,-2,-3,1], k = 5;
    expect(subarraysDivByK(nums, k)).toBe(7);
  });

  it('e.g. 2', () => {
    const nums = [5], k = 9;
    expect(subarraysDivByK(nums, k)).toBe(0);
  });

});
