import { maxSubarraySumCircular } from '../src/918.maximum-sum-circular-subarray';

describe('Maximum Sum Circular Subarray', () => {

  it('e.g. 1', () => {
    const nums = [1,-2,3,-2];
    expect(maxSubarraySumCircular(nums)).toBe(3);
  });

  it('e.g. 2', () => {
    const nums = [5,-3,5];
    expect(maxSubarraySumCircular(nums)).toBe(10);
  });

  it('e.g. 3', () => {
    const nums = [3,-1,2,-1];
    expect(maxSubarraySumCircular(nums)).toBe(4);
  });

  it('e.g. 4', () => {
    const nums = [3,1,3,2,6];
    expect(maxSubarraySumCircular(nums)).toBe(15);
  });

  it('e.g. 5', () => {
    const nums = [-2,-3,-1];
    expect(maxSubarraySumCircular(nums)).toBe(-1);
  });

});
