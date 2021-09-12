import { calculate } from '../src/227.basic-calculator-ii';

describe( 'Basic Calculator II', () => {

  it( '3+2*2', () => {
    const s = '3+2*2';
    expect( calculate( s ) ).toBe( 7 );
  } );

  it( ' 3/2 ', () => {
    const s = ' 3/2 ';
    expect( calculate( s ) ).toBe( 1 );
  } );

  it( ' 3+5 / 2 ', () => {
    const s = ' 3+5 / 2 ';
    expect( calculate( s ) ).toBe( 5 );
  } );

} );
