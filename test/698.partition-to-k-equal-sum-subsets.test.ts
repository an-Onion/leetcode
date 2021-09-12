import { canPartitionKSubsets } from '../src/698.partition-to-k-equal-sum-subsets';

describe( 'Partition to K Equal Sum Subsets', () => {
  it( 'e.g. 1', () => {
    const nums = [4,3,2,3,5,2,1], k = 4;
    expect( canPartitionKSubsets( nums, k ) ).toBeTruthy();
  } );

  it( 'e.g. 2', () => {
    const nums = [1,2,3,4], k = 3;
    expect( canPartitionKSubsets( nums, k ) ).toBeFalsy();
  } );
} );
