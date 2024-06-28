import { orderOfLargestPlusSign } from '../src/701-800/764.largest-plus-sign';

describe( 'Largest Plus Sign', () => {

  it( 'e.g. 1', () => {
    const n = 5, mines = [[4,2]];
    expect( orderOfLargestPlusSign( n, mines ) ).toBe( 2 );
  } );

  it( 'e.g. 2', () => {
    const n = 1, mines = [[0,0]];
    expect( orderOfLargestPlusSign( n, mines ) ).toBe( 0 );
  } );

} );
