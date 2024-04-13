import { intToRoman } from '../src/1-100/12.integer-to-roman';

describe( 'Integer to Roman', () => {
  it( '3', () => {
    expect( intToRoman( 3 ) ).toBe( 'III' );
  } );

  it( '4', () => {
    expect( intToRoman( 4 ) ).toBe( 'IV' );
  } );

  it( '9', () => {
    expect( intToRoman( 9 ) ).toBe( 'IX' );
  } );

  it( '58', () => {
    expect( intToRoman( 58 ) ).toBe( 'LVIII' );
  } );

  it( '1994', () => {
    expect( intToRoman( 1994 ) ).toBe( 'MCMXCIV' );
  } );
} );

