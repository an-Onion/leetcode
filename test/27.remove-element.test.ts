import { removeElement } from '../src/27.remove-element';

describe('Remove Element', () => {
  it('[3,2,2,3], 3 => 2', () => {
    const nums: number[] = [3, 2, 2, 3];
    const len: number = removeElement(nums, 3);
    nums.length = len;
    expect(len).toBe(2);
    expect(nums).toStrictEqual([2, 2]);
  });

  it('[0,1,2,2,3,0,4,2], 2 => 5', () => {
    const nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
    const len: number = removeElement(nums, 2);
    nums.length = len;
    expect(len).toBe(5);
    expect(nums).toStrictEqual([0, 1, 4, 0, 3]);
  });
});
