import { firstMissingPositive } from '../src/41.first-missing-positive';

describe( 'First Missing Positive', () => {

  it( '[1,1]', () => {
    expect( firstMissingPositive( [1,1] ) ).toBe( 2 );
  } );

  it( '[2,1]', () => {
    expect( firstMissingPositive( [2,1] ) ).toBe( 3 );
  } );

  it( '[1,2,0]', () => {
    expect( firstMissingPositive( [1,2,0] ) ).toBe( 3 );
  } );

  it( '[3,4,-1,1]', () => {
    expect( firstMissingPositive( [3,4,-1,1] ) ).toBe( 2 );
  } );

  it( '[7,8,9,11,12]', () => {
    expect( firstMissingPositive( [7,8,9,11,12] ) ).toBe( 1 );
  } );
} );
