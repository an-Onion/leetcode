import { bagOfTokensScore } from '../src/901-999/948.bag-of-tokens';

describe( 'Bag of Tokens', () => {

  it( 'e.g. 1', () => {
    const tokens = [100], power = 50;
    expect( bagOfTokensScore( tokens, power ) ).toBe( 0 );
  } );

  it( 'e.g. 2', () => {
    const tokens = [100,200], power = 150;
    expect( bagOfTokensScore( tokens, power ) ).toBe( 1 );
  } );

  it( 'e.g. 3', () => {
    const tokens = [100,200,300,400], power = 200;
    expect( bagOfTokensScore( tokens, power ) ).toBe( 2 );
  } );

} );
