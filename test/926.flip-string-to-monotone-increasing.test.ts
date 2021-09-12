import { minFlipsMonoIncr } from '../src/926.flip-string-to-monotone-increasing';

describe( 'Flip String to Monotone Increasing', () => {

  it( '00110', () => {
    expect( minFlipsMonoIncr( '00110' ) ).toBe( 1 );
  } );

  it( '010110', () => {
    expect( minFlipsMonoIncr( '010110' ) ).toBe( 2 );
  } );

  it( '00011000', () => {
    expect( minFlipsMonoIncr( '00011000' ) ).toBe( 2 );
  } );

} );
