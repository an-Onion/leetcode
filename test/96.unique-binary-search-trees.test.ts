import { numTrees } from '../src/96.unique-binary-search-trees';

describe( 'Unique Binary Search Trees', () => {

  it( '3', () => {
    expect( numTrees( 3 ) ).toBe( 5 );
  } );

  it( '1', () => {
    expect( numTrees( 1 ) ).toBe( 1 );
  } );

} );
