import { search } from '../src/1-100/81.search-in-rotated-sorted-array-ii';

describe( 'Search in Rotated Sorted Array II', () => {

  it( 'nums = [2,5,6,0,0,1,2], target = 0', () => {
    expect( search( [2,5,6,0,0,1,2], 0 ) ).toBeTruthy();
  } );

  it( 'nums = [2,5,6,0,0,1,2], target = 3', () => {
    expect( search( [2,5,6,0,0,1,2], 3 ) ).toBeFalsy();
  } );

  it( 'nums = [1,0,1,1,1], target = 0', () => {
    expect( search( [1,0,1,1,1], 0 ) ).toBeTruthy();
  } );

  it( 'nums = [0,0,1,1,2,0], target = 2', () => {
    expect( search( [0,0,1,1,2,0], 2 ) ).toBeTruthy();
  } );

  it( 'nums = [2,2,2,3,2,2,2], target = 3', () => {
    expect( search( [2,2,2,3,2,2,2], 3 ) ).toBeTruthy();
  } );

} );
