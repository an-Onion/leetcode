import { findLength } from '../src/718.maximum-length-of-repeated-subarray';

describe( 'Maximum Length of Repeated Subarray', () => {

  it( 'nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]' ,() => {
    const nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7];
    expect( findLength( nums1, nums2 ) ).toBe( 3 );
  } );

  it( 'nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]' ,() => {
    const nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0];
    expect( findLength( nums1, nums2 ) ).toBe( 5 );
  } );

} );

