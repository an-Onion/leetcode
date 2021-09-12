import { minPathSum } from '../src/64.minimum-path-sum';

describe( 'Minimum Path Sum', () => {

  it( '[[1,3,1],[1,5,1],[4,2,1]]', () => {
    expect( minPathSum( [[1,3,1],[1,5,1],[4,2,1]] ) ).toBe( 7 );
  } );

  it( '[[1,2,3],[4,5,6]]', () => {
    expect( minPathSum( [[1,2,3],[4,5,6]] ) ).toBe( 12 );
  } );
} );
