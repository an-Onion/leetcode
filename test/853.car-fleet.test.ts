import { carFleet } from '../src/853.car-fleet';

describe( 'Car Fleet', () => {

  it( 'e.g. 1', () => {
    const target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3];
    expect( carFleet( target, position, speed ) ).toBe( 3 );
  } );

  it( 'e.g. 2', () => {
    const target = 10, position = [3], speed = [3];
    expect( carFleet( target, position, speed ) ).toBe( 1 );
  } );

  it( 'e.g. 3', () => {
    const target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3];
    expect( carFleet( target, position, speed ) ).toBe( 3 );
  } );

} );
