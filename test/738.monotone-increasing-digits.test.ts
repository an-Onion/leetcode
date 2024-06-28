import { monotoneIncreasingDigits } from '../src/701-800/738.monotone-increasing-digits';

describe( 'Monotone Increasing Digits', () => {

  it( '10', () => {
    const n = 10;
    expect( monotoneIncreasingDigits( n ) ).toBe( 9 );
  } );

  it( '1234', () => {
    const n = 1234;
    expect( monotoneIncreasingDigits( n ) ).toBe( 1234 );
  } );

  it( '332', () => {
    const n = 332;
    expect( monotoneIncreasingDigits( n ) ).toBe( 299 );
  } );
} );
