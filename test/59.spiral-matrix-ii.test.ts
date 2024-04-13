import { generateMatrix } from '../src/1-100/59.spiral-matrix-ii';

describe( 'Spiral Matrix II', () => {

  it( '1', () => {
    expect( generateMatrix( 1 ) ).toStrictEqual(
      [[1]]
    );
  } );

  it( '2', () => {
    expect( generateMatrix( 2 ) ).toStrictEqual(
      [[1,2],[4,3]]
    );
  } );

  it( '3', () => {
    expect( generateMatrix( 3 ) ).toStrictEqual(
      [[1,2,3],[8,9,4],[7,6,5]]
    );
  } );

} );
