import { addBinary } from '../src/67.add-binary';

describe( 'Add Binary', () => {
  it( '11 + 1', () => {
    expect( addBinary( '11', '1' ) ).toBe( '100' );
  } );

  it( '1010 + 1011', () => {
    expect( addBinary( '1010', '1011' ) ).toBe( '10101' );
  } );
} );
