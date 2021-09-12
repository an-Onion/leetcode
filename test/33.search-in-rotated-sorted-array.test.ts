import { search } from '../src/33.search-in-rotated-sorted-array';

describe( 'Search in Rotated Sorted Array', () => {

  it( 'nums = [4,5,6,7,8,1,2,3], target = 8', () => {
    expect( search( [4,5,6,7,8,1,2,3], 8 ) ).toBe( 4 );
  } );

  it( 'nums = [5,1,3], target = 5', () => {
    expect( search( [5,1,3], 5 ) ).toBe( 0 );
  } );


  it( 'nums = [4,5,6,7,0,1,2], target = 0', () => {
    expect( search( [4,5,6,7,0,1,2], 0 ) ).toBe( 4 );
  } );

  it( 'nums = [4,5,6,7,0,1,2], target = 3', () => {
    expect( search( [4,5,6,7,0,1,2], 3 ) ).toBe( -1 );
  } );

  it( 'nums = [1], target = 0', () => {
    expect( search( [1], 0 ) ).toBe( -1 );
  } );
} );
