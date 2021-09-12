import { threeSumClosest } from '../src/16.3-sum-closest';

describe( '3Sum Closest', () => {

  it( '[-1,2,1,-4], 1', () => {
    expect( threeSumClosest( [-1,2,1,-4], 1 ) ).toEqual( 2 );
  } );
} );
