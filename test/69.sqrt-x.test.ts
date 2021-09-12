import { mySqrt } from '../src/69.sqrt-x';

describe( 'Sqrt(x)', () => {

  it( '0', () => {
    expect( mySqrt( 0 ) ).toBe( 0 );
  } );

  it( '1', () => {
    expect( mySqrt( 1 ) ).toBe( 1 );
  } );

  it( '2', () => {
    expect( mySqrt( 3 ) ).toBe( 1 );
  } );

  it( '3', () => {
    expect( mySqrt( 4 ) ).toBe( 2 );
  } );

  it( '4', () => {
    expect( mySqrt( 4 ) ).toBe( 2 );
  } );

  it( '5', () => {
    expect( mySqrt( 5 ) ).toBe( 2 );
  } );


  it( '6', () => {
    expect( mySqrt( 6 ) ).toBe( 2 );
  } );

  it( '7', () => {
    expect( mySqrt( 7 ) ).toBe( 2 );
  } );

  it( '8', () => {
    expect( mySqrt( 8 ) ).toBe( 2 );
  } );

  it( '9', () => {
    expect( mySqrt( 9 ) ).toBe( 3 );
  } );
} );


