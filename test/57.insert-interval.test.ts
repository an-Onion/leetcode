import { insert } from '../src/57.insert-interval';

describe( 'Insert Interval', () => {

  it( '[[1,3],[6,9]], [2,5]', () => {
    expect( insert( [[1,3],[6,9]], [2,5] ) )
    .toStrictEqual( [[1,5],[6,9]] );
  } );

  it( '[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]', () => {
    expect( insert( [[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8] ) )
    .toStrictEqual( [[1,2],[3,10],[12,16]] );
  } );

  it( '[], [5,7]', () => {
    expect( insert( [], [5,7] ) )
    .toStrictEqual( [[5,7]] );
  } );

  it( '[[0,5],[8,9]], [3,4]', () => {
    expect( insert( [[0,5],[8,9]], [3,4] ) )
    .toStrictEqual( [[0,5],[8,9]] );
  } );

  it( '[[1,5]], [5,7]', () => {
    expect( insert( [[1,5]], [5,7] ) )
    .toStrictEqual( [[1,7]] );
  } );

} );
