import { findMinArrowShots } from '../src/452.minimum-number-of-arrows-to-burst-balloons';

describe( 'Minimum Number of Arrows to Burst Balloons', () => {

  it( '[[10,16],[2,8],[1,6],[7,12]]', () => {
    expect( findMinArrowShots( [[10,16],[2,8],[1,6],[7,12]] ) ).toBe( 2 );
  } );

  it( '[[1,2],[3,4],[5,6],[7,8]]', () => {
    expect( findMinArrowShots( [[1,2],[3,4],[5,6],[7,8]] ) ).toBe( 4 );
  } );

  it( '[[1,2],[2,3],[3,4],[4,5]]', () => {
    expect( findMinArrowShots( [[1,2],[2,3],[3,4],[4,5]] ) ).toBe( 2 );
  } );

  it( '[[1,2]]', () => {
    expect( findMinArrowShots( [[1,2]] ) ).toBe( 1 );
  } );

  it( '[[2,3],[2,3]]', () => {
    expect( findMinArrowShots( [[2,3],[2,3]] ) ).toBe( 1 );
  } );
} );
