import { eraseOverlapIntervals } from '../src/435.non-overlapping-intervals';

describe( 'Non Overlapping Intervals', () => {

  it( '[[1,2],[2,3],[3,4],[1,3]]', () => {
    expect( eraseOverlapIntervals( [[1,2],[2,3],[3,4],[1,3]] ) ).toBe( 1 );
  } );

  it( '[[1,2],[1,2],[1,2]]', () => {
    expect( eraseOverlapIntervals( [[1,2],[1,2],[1,2]] ) ).toBe( 2 );
  } );

  it( '[[1,2],[2,3]]', () => {
    expect( eraseOverlapIntervals( [[1,2],[2,3]] ) ).toBe( 0 );
  } );
} );

