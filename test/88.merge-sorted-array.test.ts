import { merge } from '../src/88.merge-sorted-array';

describe( 'Merge Sorted Array', () => {

  it( '[1,2,3], [2,5,6]', () => {
    const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
    merge( nums1, m, nums2, n );
    expect( nums1 ).toStrictEqual( [1,2,2,3,5,6] );
  } );

  it( '[1], []', () => {
    const m = 1, n = 0;
    const nums1 = [1], nums2: number[] = [];
    merge( nums1, m, nums2, n );
    expect( nums1 ).toStrictEqual( [1] );
  } );

} );
