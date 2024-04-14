import { maximalSquare } from '../src/201-300/221.maximal-square';

describe( 'Maximal Square', () => {

  it( 'E.g. 1', () => {
    const matrix = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']];
    expect( maximalSquare( matrix ) ).toBe( 4 );
  } );

  it( 'E.g. 2', () => {
    const matrix = [['0','1'],['1','0']];
    expect( maximalSquare( matrix ) ).toBe( 1 );
  } );

  it( 'E.g. 3', () => {
    const matrix = [['0']];
    expect( maximalSquare( matrix ) ).toBe( 0 );
  } );

  it( 'E.g. 4', () => {
    const matrix = [['1','1'],['1','1']];
    expect( maximalSquare( matrix ) ).toBe( 4 );
  } );

} );

