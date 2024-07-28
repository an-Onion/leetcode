import { sortedSquares } from '../src/901-999/977.squares-of-a-sorted-array';

describe( 'Squares of a Sorted Array', () => {

  it( '[-4,-1,0,3,10]', () => {
    expect( sortedSquares( [-4,-1,0,3,10] ) ).toStrictEqual( [0,1,9,16,100] );
  } );

  it( '[-7,-3,2,3,11]', () => {
    expect( sortedSquares( [-7,-3,2,3,11] ) ).toStrictEqual( [4,9,9,49,121] );
  } );

} );
