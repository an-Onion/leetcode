import { knightProbability } from '../src/688.knight-probability-in-chessboard';

describe( 'Knight Probability in Chessboard', () => {

  it( 'e.g. 1', () => {
    const n = 3, k = 2, row = 0, column = 0;
    expect( knightProbability( n, k, row, column ) ).toBe( 0.06250 );
  } );

  it( 'e.g. 2', () => {
    const n = 1, k = 0, row = 0, column = 0;
    expect( knightProbability( n, k, row, column ) ).toBe( 1.00000 );
  } );

} );
