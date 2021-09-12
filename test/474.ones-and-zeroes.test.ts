import { findMaxForm } from '../src/474.ones-and-zeroes';

describe( 'Ones and Zeroes', () => {

  it( 'e.g. 1', () => {
    const strs = ['10','0001','111001','1','0'], m = 5, n = 3;
    expect( findMaxForm( strs, m, n ) ).toBe( 4 );
  } );

  it( 'e.g. 2', () => {
    const strs = ['10','0','1'], m = 1, n = 1;
    expect( findMaxForm( strs, m, n ) ).toBe( 2 );
  } );

} );
