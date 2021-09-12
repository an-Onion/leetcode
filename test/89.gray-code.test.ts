import { grayCode } from '../src/89.gray-code';

describe( 'gray code', () => {

  it( '2', () => {
    expect( grayCode( 2 ) ).toStrictEqual( [0,1,3,2] );
  } );

  it( '1', () => {
    expect( grayCode( 1 ) ).toStrictEqual( [0,1] );
  } );

} );
