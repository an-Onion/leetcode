import { champagneTower } from '../src/701-800/799.champagne-tower';

describe( 'Champagne Tower', () => {

  it( 'e.g. 1', () => {
    const poured = 1, query_row = 1, query_glass = 1;
    expect( champagneTower( poured, query_row, query_glass ) ).toBe( 0.00000 );
  } );

  it( 'e.g. 2', () => {
    const poured = 2, query_row = 1, query_glass = 1;
    expect( champagneTower( poured, query_row, query_glass ) ).toBe( 0.50000 );
  } );

} );
