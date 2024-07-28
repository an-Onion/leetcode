import { minIncrementForUnique } from '../src/901-999/945.minimum-increment-to-make-array-unique';

describe( 'Minimum Increment to Make Array Unique', () => {

  it( 'e.g. 1', () => {
    const nums = [1,2,2];
    expect( minIncrementForUnique( nums ) ).toBe( 1 );
  } );

  it( 'e.g. 2', () => {
    const nums = [3,2,1,2,1,7];
    expect( minIncrementForUnique( nums ) ).toBe( 6 );
  } );
} );
