import { convert } from '../src/1-100/6.zig-zag-conversion';

describe( 'ZigZag Conversion', () => {
  it( 'PAYPALISHIRING 3', () => {
    expect( convert( 'PAYPALISHIRING', 3 ) ).toBe( 'PAHNAPLSIIGYIR' );
  } );

  it( 'PAYPALISHIRING 4', () => {
    expect( convert( 'PAYPALISHIRING', 4 ) ).toBe( 'PINALSIGYAHRPI' );
  } );

  it( 'A 1', () => {
    expect( convert( 'A', 1 ) ).toBe( 'A' );
  } );
} );
