import { originalDigits } from '../src/401-500/423.reconstruct-original-digits-from-english';

describe( 'Reconstruct Original Digits from English', () => {

  it( 'owoztneoer', () => {
    expect( originalDigits( 'owoztneoer' ) ).toBe( '012' );
  } );

  it( 'fviefuro', () => {
    expect( originalDigits( 'fviefuro' ) ).toBe( '45' );
  } );

} );

