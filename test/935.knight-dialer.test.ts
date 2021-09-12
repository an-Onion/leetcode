import { knightDialer } from '../src/935.knight-dialer';

describe( 'Knight Dialer', () => {

  it( '1', () => {
    expect( knightDialer( 1 ) ).toBe( 10 );
  } );

  it( '2', () => {
    expect( knightDialer( 2 ) ).toBe( 20 );
  } );

  it( '3', () => {
    expect( knightDialer( 3 ) ).toBe( 46 );
  } );

  it( '4', () => {
    expect( knightDialer( 4 ) ).toBe( 104 );
  } );

  it( '3131', () => {
    expect( knightDialer( 3131 ) ).toBe( 136006598 );
  } );

} );
