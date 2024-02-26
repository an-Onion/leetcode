import { trap } from '../src/42.trapping-rain-water';

describe( 'Trapping Rain Water', () => {

  it( '[2,0,1]', () => {
    expect( trap( [2,0,1] ) ).toBe( 1 );
  } );

  it( '[1]', () => {
    expect( trap( [1] ) ).toBe( 0 );
  } );

  it( '[0, 1]', () => {
    expect( trap( [0, 1] ) ).toBe( 0 );
  } );

  it( '[0, 1, 0 , 2]', () => {
    expect( trap( [0, 1, 0 , 2] ) ).toBe( 1 );
  } );

  it( '[ 2, 1, 0, 1, 3]', () => {
    expect( trap( [2, 1, 0, 1, 3] ) ).toBe( 4 );
  } );

  it( '[0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect( trap( [0,1,0,2,1,0,1,3,2,1,2,1] ) ).toBe( 6 );
  } );

  it( '[4,2,0,3,2,5]', () => {
    expect( trap( [4,2,0,3,2,5] ) ).toBe( 9 );
  } );
} );
