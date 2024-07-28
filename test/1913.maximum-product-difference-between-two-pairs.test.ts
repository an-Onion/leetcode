import { maxProductDifference } from '../src/1000/1913.maximum-product-difference-between-two-pairs';

describe( 'Maximum Product Difference Between Two Pairs', () => {

  it( '[5,6,2,7,4]', () => {
    expect( maxProductDifference( [5,6,2,7,4] ) ).toBe( 34 );
  } );

  it( '[4,2,5,9,7,4,8]', () => {
    expect( maxProductDifference( [4,2,5,9,7,4,8] ) ).toBe( 64 );
  } );

} );
