import { myPow } from '../src/1-100/50.pow-x-n';

describe( 'Pow(x, n)', () => {
  it( '2, 10', () => {
    expect( myPow( 2, 10 ) ).toBe( 1024 );
  } );

  it( '2.1, 3', () => {
    expect( myPow( 2.1, 3 ).toFixed( 3 ) ).toBe( '9.261' );
  } );

  it( '2, -2', () => {
    expect( myPow( 2, -2 ) ).toBe( 0.25 );
  } );

  it( '2, -2147483648', () => {
    expect( myPow( 2, -2147483648 ) ).toBe( 0 );
  } );
} );
