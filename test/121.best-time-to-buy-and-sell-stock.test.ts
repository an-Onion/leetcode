import { maxProfit } from '../src/121.best-time-to-buy-and-sell-stock';

describe( 'Best Time to Buy and Sell Stock', () => {

  it( '[7,1,5,3,6,4]', () => {
    expect( maxProfit( [7,1,5,3,6,4] ) ).toBe( 5 );
  } );

  it( '[7,6,4,3,1]', () => {
    expect( maxProfit( [7,6,4,3,1] ) ).toBe( 0 );
  } );

} );
