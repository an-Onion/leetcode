import { canPartition } from '../src/416.partition-equal-subset-sum';

describe('Partition Equal Subset Sum',()=>{
  it('[1,5,11,5]', () => {
    expect(canPartition([1,5,11,5])).toBeTruthy();
  });

  it('[1,2,3,5]', () => {
    expect(canPartition([1,2,3,5])).toBeFalsy();
  });

  it('[1]', () => {
    expect(canPartition([1])).toBeFalsy();
  });
});
