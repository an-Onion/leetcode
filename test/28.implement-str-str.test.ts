import { strStr } from '../src/1-100/28.implement-str-str';

describe( 'Implement strStr()', () => {
  it( 'hello && ll', () => {
    expect( strStr( 'hello', 'll' ) ).toBe( 2 );
  } );


  it( 'aaaaa && bba', () => {
    expect( strStr( 'aaaaa', 'bba' ) ).toBe( -1 );
  } );


  it( ' && ', () => {
    expect( strStr( '', '' ) ).toBe( 0 );
  } );
} );
