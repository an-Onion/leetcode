import { spiralOrder } from '../src/1-100/54.spiral-matrix';

describe( 'Spiral Matrix', () => {

  it( '[[1]]', () => {
    expect( spiralOrder( [[1]] ) )
    .toStrictEqual( [1] );
  } );

  it( '[[1,2],[3,4]]', () => {
    expect( spiralOrder( [[1,2],[3,4]] ) )
    .toStrictEqual( [1,2,4,3] );
  } );

  it( '[[1,2,3],[4,5,6],[7,8,9]]', () => {
    expect( spiralOrder( [[1,2,3],[4,5,6],[7,8,9]] ) )
    .toStrictEqual( [1,2,3,6,9,8,7,4,5] );
  } );

  it( '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', () => {
    expect( spiralOrder( [[1,2,3,4],[5,6,7,8],[9,10,11,12]] ) )
    .toStrictEqual( [1,2,3,4,8,12,11,10,9,5,6,7] );
  } );

} );
