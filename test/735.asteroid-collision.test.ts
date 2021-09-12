import { asteroidCollision } from '../src/735.asteroid-collision';

describe( 'Asteroid Collision', () => {


  it( 'e.g. 1', () => {
    const asteroids = [5,10,-5];
    expect( asteroidCollision( asteroids ) ).toStrictEqual( [5,10] );
  } );

  it( 'e.g. 2', () => {
    const asteroids = [8,-8];
    expect( asteroidCollision( asteroids ) ).toStrictEqual( [] );
  } );

  it( 'e.g. 3', () => {
    const asteroids = [10,2,-5];
    expect( asteroidCollision( asteroids ) ).toStrictEqual( [10] );
  } );

  it( 'e.g. 4', () => {
    const asteroids = [-2,-1,1,2];
    expect( asteroidCollision( asteroids ) ).toStrictEqual( [-2,-1,1,2] );
  } );

} );
