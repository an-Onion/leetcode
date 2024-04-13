import { maxArea } from '../src/1-100/11.container-with-most-water';

describe( 'Container With Most Water', () => {

  it( '[1,1]', () => {
    expect( maxArea( [1,1] ) ).toBe( 1 );
  } );

  it( '[4,3,2,1,4]', () => {
    expect( maxArea( [4,3,2,1,4] ) ).toBe( 16 );
  } );
} );
