import { largestRectangleArea } from '../src/1-100/84.largest-rectangle-in-histogram';

describe( 'Largest Rectangle in Histogram', () => {

  it( '[2, 0, 2]', () => {
    expect( largestRectangleArea( [2, 0, 2] ) ).toBe( 2 );
  } );

  it( '[]', () => {
    expect( largestRectangleArea( [] ) ).toBe( 0 );
  } );

  it( '[1]', () => {
    expect( largestRectangleArea( [1] ) ).toBe( 1 );
  } );

  it( '[2,1]', () => {
    expect( largestRectangleArea( [2,1] ) ).toBe( 2 );
  } );


  it( '[2,1,5,6]', () => {
    expect( largestRectangleArea( [2,1,5,6] ) ).toBe( 10 );
  } );

  it( '[5,4,1,2]', () => {
    expect( largestRectangleArea( [5,4,1,2] ) ).toBe( 8 );
  } );

  it( '[2,1,5,6,2,3]', () => {
    expect( largestRectangleArea( [2,1,5,6,2,3] ) ).toBe( 10 );
  } );
} );
