import { numSubarrayProductLessThanK } from '../src/713.subarray-product-less-than-k';

describe( 'Subarray Product Less Than K', () => {
  it( 'nums = [10, 5, 2, 6], k = 100', () => {
    expect( numSubarrayProductLessThanK( [10, 5, 2, 6], 100 ) ).toBe( 8 );
  } );

  it( 'nums = [10, 5, 2, 6], k = 601', () => {
    expect( numSubarrayProductLessThanK( [10, 5, 2, 6], 601 ) ).toBe( 10 );
  } );

} );
