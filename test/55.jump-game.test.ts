import { canJump } from '../src/1-100/55.jump-game';

describe( 'Jump Game', () => {

  it( '[2,3,1,1,4]', () => {
    expect( canJump( [2,3,1,1,4] ) ).toBeTruthy();
  } );

  it( '[3,2,1,0,4]', () => {
    expect( canJump( [3,2,1,0,4] ) ).toBeFalsy();
  } );

} );
