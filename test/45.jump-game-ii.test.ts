import { jump } from '../src/1-100/45.jump-game-ii';

describe( 'Jump Game II', () => {

  it( '[2,3,1,1,4]', () => {
    expect( jump( [2,3,1,1,4] ) ).toBe( 2 );
  } );

  it( '[2,3,0,1,4]', () => {
    expect( jump( [2,3,0,1,4] ) ).toBe( 2 );
  } );

  it( '[0]', () => {
    expect( jump( [0] ) ).toBe( 0 );
  } );

  it( '[7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]', () => {
    expect( jump( [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3] ) ).toBe( 2 );
  } );

} );


