import { minAreaRect } from '../src/939.minimum-area-rectangle';

describe( 'Minimum Area Rectangle' ,() => {

  it( 'e.g. 1', () => {
    const points = [[1,1],[1,3],[3,1],[3,3],[2,2]];
    expect( minAreaRect( points ) ).toBe( 4 );
  } );

  it( 'e.g. 2', () => {
    const points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]];
    expect( minAreaRect( points ) ).toBe( 2 );
  } );

} );
