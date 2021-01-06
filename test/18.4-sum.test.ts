import { fourSum } from '../src/18.4-sum';

describe('4Sum', () => {
  it('[1,0,-1,0,-2,2], 0', () => {
    expect(fourSum([1,0,-1,0,-2,2], 0)).toStrictEqual([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
  });
});
