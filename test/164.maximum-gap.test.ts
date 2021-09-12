import { maximumGap } from '../src/164.maximum-gap';

describe( 'Maximum Gap', () => {

  it( 'e.g. 1', () => {
    const nums = [3,6,9,1];
    expect( maximumGap( nums ) ).toBe( 3 );
  } );

  it( 'e.g. 2', () => {
    const nums = [10];
    expect( maximumGap( nums ) ).toBe( 0 );
  } );

} );
