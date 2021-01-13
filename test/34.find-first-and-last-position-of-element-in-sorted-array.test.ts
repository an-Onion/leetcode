import { searchRange } from '../src/34.find-first-and-last-position-of-element-in-sorted-array';

describe('Find First and Last Position of Element in Sorted Array', () => {

  it('nums = [5,7,7,8,8,10], target = 8', () => {
    expect(searchRange([5,7,7,8,8,10], 8)).toStrictEqual([3,4]);
  });

  it('nums = [5,7,7,8,8,10], target = 6', () => {
    expect(searchRange([5,7,7,8,8,10], 6)).toStrictEqual([-1,-1]);
  });

  it('nums = [], target = 0', () => {
    expect(searchRange([], 0)).toStrictEqual([-1,-1]);
  });
});
