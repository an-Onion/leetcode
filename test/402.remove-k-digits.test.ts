import { removeKdigits } from '../src/401-500/402.remove-k-digits';

describe( 'Remove K Digits', () => {

  it( 'eg 1', () => {
    const num = '1432219', k = 3;
    expect( removeKdigits( num, k ) ).toBe( '1219' );
  } );

  it( 'eg 2', () => {
    const num = '10200', k = 1;
    expect( removeKdigits( num, k ) ).toBe( '200' );
  } );

  it( 'eg 3', () => {
    const num = '10', k = 2;
    expect( removeKdigits( num, k ) ).toBe( '0' );
  } );

  it( 'eg 4', () => {
    const num = '10', k = 1;
    expect( removeKdigits( num, k ) ).toBe( '0' );
  } );

  it( 'eg 5', () => {
    const num = '12', k = 1;
    expect( removeKdigits( num, k ) ).toBe( '1' );
  } );

} );
