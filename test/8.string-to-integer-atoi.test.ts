import { myAtoi } from '../src/8.string-to-integer-atoi';

describe( 'String to Integer (atoi)', () => {
  it( '   -42', () => {
    expect( myAtoi( '   -42' ) ).toBe( -42 );
  } );

  it( '4193 with words', () => {
    expect( myAtoi( '4193 with words' ) ).toBe( 4193 );
  } );

  it( 'words and 987', () => {
    expect( myAtoi( 'words and 987' ) ).toBe( 0 );
  } );

  it( '-91283472332', () => {
    expect( myAtoi( '-91283472332' ) ).toBe( -2147483648 );
  } );
} );
