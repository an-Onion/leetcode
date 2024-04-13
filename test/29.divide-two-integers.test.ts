import { divide } from '../src/1-100/29.divide-two-integers';

describe( 'Divide Two Integers', () => {

  it( '-2147483648/2', () => {
    expect( divide( -2147483648, 2 ) ).toBe( -1073741824 );
  } );

  it( '-2147483648/-1', () => {
    expect( divide( -2147483648, -1 ) ).toBe( 2147483647 );
  } );

  it( '-2147483648/-2147483648', () => {
    expect( divide( -2147483648, -2147483648 ) ).toBe( 1 );
  } );

  it( '2147483647/2', () => {
    expect( divide( 2147483647,2 ) ).toBe( 1073741823 );
  } );

  it( '10/3', () => {
    expect( divide( 10,3 ) ).toBe( 3 );
  } );

  it( '7/-3', () => {
    expect( divide( 7,-3 ) ).toBe( -2 );
  } );

  it( '0/1', () => {
    expect( divide( 0,1 ) ).toBe( 0 );
  } );

  it( '1/1', () => {
    expect( divide( 1,1 ) ).toBe( 1 );
  } );

} );
