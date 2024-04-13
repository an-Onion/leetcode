import { minDistance } from '../src/1-100/72.edit-distance';

describe( 'Edit Distance', () => {

  it( 'horse ros', () => {
    expect( minDistance( 'horse', 'ros' ) ).toBe( 3 );
  } );

  it( 'intention execution', () => {
    expect( minDistance( 'intention', 'execution' ) ).toBe( 5 );
  } );
} );
