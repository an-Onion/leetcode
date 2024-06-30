import { eventualSafeNodes } from '../src/801-900/802.find-eventual-safe-states';

describe( 'Find Eventual Safe States', () => {

  it( 'e.g. 1', () => {
    const graph = [[1,2],[2,3],[5],[0],[5],[],[]];
    expect( eventualSafeNodes( graph ) ).toStrictEqual( [2,4,5,6] );
  } );

  it( 'e.g. 2', () => {
    const graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]];
    expect( eventualSafeNodes( graph ) ).toStrictEqual( [4] );
  } );

} );
