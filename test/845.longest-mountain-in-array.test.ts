import { longestMountain } from '../src/845.longest-mountain-in-array';

describe( 'Longest Mountain in Array', () => {

  it( 'e.g. 1', () => {
    const arr = [2,1,4,7,3,2,5];
    expect( longestMountain( arr ) ).toBe( 5 );
  } );

  it( 'e.g. 2', () => {
    const arr = [2,2,2];
    expect( longestMountain( arr ) ).toBe( 0 );
  } );

  it( 'e.g. 3', () => {
    const arr = [0,1,2,3,4,5,6,7,8,9];
    expect( longestMountain( arr ) ).toBe( 0 );
  } );

} );
