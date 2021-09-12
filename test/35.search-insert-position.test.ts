import { searchInsert } from '../src/35.search-insert-position';

describe( 'Search Insert Position', () => {
  it( '[1,3,5,6], 5 => 2', () => {
    expect( searchInsert( [1,3,5,6], 5 ) ).toBe( 2 );
  } );

  it( '[1,3,5,6], 2 => 1', () => {
    expect( searchInsert( [1,3,5,6], 2 ) ).toBe( 1 );
  } );

  it( '[1,3,5,6], 7 => 4', () => {
    expect( searchInsert( [1,3,5,6], 7 ) ).toBe( 4 );
  } );

  it( '[1,3,5,6], 0 => 0', () => {
    expect( searchInsert( [1,3,5,6], 0 ) ).toBe( 0 );
  } );

  it( '[1], 0 => 0', () => {
    expect( searchInsert( [1], 0 ) ).toBe( 0 );
  } );
} );
