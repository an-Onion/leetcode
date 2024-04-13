import { climbStairs } from '../src/1-100/70.climbing-stairs';

describe( 'Climbing Stairs', () => {

  it( '2', () => {
    expect( climbStairs( 2 ) ).toBe( 2 );
  } );

  it( '3', () => {
    expect( climbStairs( 3 ) ).toBe( 3 );
  } );

} );
