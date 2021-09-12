import { pyramidTransition } from '../src/756.pyramid-transition-matrix';

describe( 'Pyramid Transition Matrix', () => {

  it( 'e.g. 1', () => {
    const bottom = 'BCD', allowed = ['BCG','CDE','GEA','FFF'];
    expect( pyramidTransition( bottom, allowed ) ).toBeTruthy();
  } );

  it( 'e.g. 2', () => {
    const bottom = 'AABA', allowed = ['AAA','AAB','ABA','ABB','BAC'];
    expect( pyramidTransition( bottom, allowed ) ).toBeFalsy();
  } );

} );
