import { numTilings } from '../src/701-800/790.domino-and-tromino-tiling';

describe( 'Domino and Tromino Tiling', () => {

  it( '3', () => {
    expect( numTilings( 3 ) ).toBe( 5 );
  } );

  it( '1', () => {
    expect( numTilings( 1 ) ).toBe( 1 );
  } );

} );
