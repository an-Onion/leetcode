import { findMaxLength } from '../src/501-600/525.contiguous-array';

describe( 'Contiguous Array', () => {

  it( '[0,1]', () => {
    expect( findMaxLength( [0,1] ) ).toBe( 2 );
  } );

  it( '[0,1,0]', () => {
    expect( findMaxLength( [0,1,0] ) ).toBe( 2 );
  } );

} );
