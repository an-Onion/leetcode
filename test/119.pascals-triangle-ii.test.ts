import { getRow } from '../src/119.pascals-triangle-ii';

describe( 'Pascal’s Triangle II', () => {

  it( '3', () => {
    expect( getRow( 3 ) ).toEqual( [1,3,3,1] );
  } );

  it( '0', () => {
    expect( getRow( 0 ) ).toEqual( [1] );
  } );

  it( '3', () => {
    expect( getRow( 1 ) ).toEqual( [1,1] );
  } );

} );
