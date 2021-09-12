import { numberToWords } from '../src/273.integer-to-english-words';

describe( 'Integer to English Words', () => {
  it( '0', () => {
    expect( numberToWords( 0 ) ).toBe( 'Zero' );
  } );

  it( '1', () => {
    expect( numberToWords( 1 ) ).toBe( 'One' );
  } );

  it( '12', () => {
    expect( numberToWords( 12 ) ).toBe( 'Twelve' );
  } );

  it( '123', () => {
    expect( numberToWords( 123 ) ).toBe( 'One Hundred Twenty Three' );
  } );

  it( '12345', () => {
    expect( numberToWords( 12345 ) ).toBe( 'Twelve Thousand Three Hundred Forty Five' );
  } );

  it( '1234567', () => {
    expect( numberToWords( 1234567 ) ).toBe( 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven' );
  } );

  it( '1234567891', () => {
    expect( numberToWords( 1234567891 ) ).toBe( 'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One' );
  } );

  it( '50868', () => {
    expect( numberToWords( 50868 ) ).toBe( 'Fifty Thousand Eight Hundred Sixty Eight' );
  } );
} );
