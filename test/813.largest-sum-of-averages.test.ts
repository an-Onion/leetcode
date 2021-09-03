import { largestSumOfAverages } from '../src/813.largest-sum-of-averages';

describe('Largest Sum of Averages', () => {

  it('e.g. 1', () => {
    const nums = [9,1,2,3,9], k = 3;
    expect(largestSumOfAverages(nums, k)).toBe(20.00000);
  });

  it('e.g. 2', () => {
    const nums = [1,2,3,4,5,6,7], k = 4;
    expect(largestSumOfAverages(nums, k)).toBe(20.50000);
  });

});
