import { uniquePathsWithObstacles } from '../src/63.unique-paths-ii';

describe( 'Unique Paths II', () => {

  it( '[[0,0,0],[0,1,0],[0,0,0]]', () => {
    expect( uniquePathsWithObstacles( [[0,0,0],[0,1,0],[0,0,0]] ) ).toBe( 2 );
  } );

  it( '[[0,1],[0,0]]', () => {
    expect( uniquePathsWithObstacles( [[0,1],[0,0]] ) ).toBe( 1 );
  } );
} );
