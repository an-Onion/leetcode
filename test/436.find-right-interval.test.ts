import { findRightInterval } from '../src/436.find-right-interval';

describe( 'Find Right Interval', () => {

  it( 'e.g. 1', () => {
    const intervals = [[1,2]];
    expect( findRightInterval( intervals ) ).toStrictEqual( [-1] );
  } );

  it( 'e.g. 2', () => {
    const intervals = [[3,4],[2,3],[1,2]];
    expect( findRightInterval( intervals ) ).toStrictEqual( [-1,0,1] );
  } );

  it( 'e.g. 3', () => {
    const intervals = [[1,4],[2,3],[3,4]];
    expect( findRightInterval( intervals ) ).toStrictEqual( [-1,2,-1] );
  } );

} );
