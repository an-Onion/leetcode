import { subsets } from '../src/1-100/78.subsets';

describe( 'Subsets', () => {

  it( '[1,2,3]', () => {
    const output = subsets( [1,2,3] ).sort();
    expect( output ).toStrictEqual(
      [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]].sort()
    );
  } );

  it( '[0]', () => {
    const output = subsets( [0] ).sort();
    expect( output ).toStrictEqual(
      [[],[0]].sort()
    );
  } );

} );
