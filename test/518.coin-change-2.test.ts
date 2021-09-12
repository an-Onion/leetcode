import { change } from '../src/518.coin-change-2';

describe( 'Coin Change 2', () => {

  it( 'e.g. 1', () => {
    const amount = 5, coins = [1,2,5];
    expect( change( amount, coins ) ).toBe( 4 );
  } );

  it( 'e.g. 2', () => {
    const amount = 3, coins = [2];
    expect( change( amount, coins ) ).toBe( 0 );
  } );

  it( 'e.g. 3', () => {
    const amount = 10, coins = [10];
    expect( change( amount, coins ) ).toBe( 1 );
  } );

  it( 'e.g. 5', () => {
    const amount = 3, coins = [1,2,5];
    expect( change( amount, coins ) ).toBe( 2 );
  } );

  it( 'e.g. 6', () => {
    const amount = 0, coins = [7];
    expect( change( amount, coins ) ).toBe( 1 );
  } );

} );
