import { findRedundantConnection } from '../src/601-700/684.redundant-connection';

describe( 'Redundant Connection', () => {

  it( 'e.g. 1', () => {
    const edges = [[1,2],[1,3],[2,3]];
    expect( findRedundantConnection( edges ) ).toStrictEqual( [2,3] );
  } );

  it( 'e.g. 2', () => {
    const edges = [[1,2],[2,3],[3,4],[1,4],[1,5]];
    expect( findRedundantConnection( edges ) ).toStrictEqual( [1,4] );
  } );

} );
