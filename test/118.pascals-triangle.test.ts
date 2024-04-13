import { generate } from '../src/101-200/118.pascals-triangle';

describe( 'Pascal’s Triangle', () => {

  it( '5', () => {
    expect( generate( 5 ) ).toStrictEqual( [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] );
  } );

  it( '1', () => {
    expect( generate( 1 ) ).toStrictEqual( [[1]] );
  } );

  it( '2', () => {
    expect( generate( 2 ) ).toStrictEqual( [[1], [1,1]] );
  } );


} );
