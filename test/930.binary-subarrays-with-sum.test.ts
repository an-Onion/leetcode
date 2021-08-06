import { numSubarraysWithSum } from '../src/930.binary-subarrays-with-sum';

describe('Binary Subarrays With Sum', () => {

  it('nums = [1,0,1,0,1], goal = 2', () => {
    const nums = [1,0,1,0,1], goal = 2;
    expect(numSubarraysWithSum(nums, goal)).toEqual(4);
  });

  it('nums = [0,0,0,0,0], goal = 0', () => {
    const nums = [0,0,0,0,0], goal = 0;
    expect(numSubarraysWithSum(nums, goal)).toEqual(15);
  });

});
