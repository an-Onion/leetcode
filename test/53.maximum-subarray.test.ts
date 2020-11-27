import { maxSubArray } from '../src/53.maximum-subarray';

describe('Maximum Subarray', () => {
  it('[-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
  });

  it('[1]', () => {
    expect(maxSubArray([1])).toBe(1);
  });

  it('[0]', () => {
    expect(maxSubArray([0])).toBe(0);
  });

  it('[-1]', () => {
    expect(maxSubArray([-1])).toBe(-1);
  });

  it('[-2147483647]', () => {
    expect(maxSubArray([-2147483647])).toBe(-2147483647);
  });
});

