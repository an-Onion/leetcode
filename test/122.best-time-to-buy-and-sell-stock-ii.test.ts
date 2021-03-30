import { maxProfit } from '../src/122.best-time-to-buy-and-sell-stock-ii';

describe('Best Time to Buy and Sell Stock II', () => {

  it('[7,1,5,3,6,4]', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(7);
  });

  it('[1,2,3,4,5]', () => {
    expect(maxProfit([1,2,3,4,5])).toBe(4);
  });

  it('[7,6,4,3,1]', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
  });

});
