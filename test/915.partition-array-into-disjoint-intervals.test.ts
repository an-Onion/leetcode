import { partitionDisjoint } from '../src/915.partition-array-into-disjoint-intervals';

describe( 'Partition Array into Disjoint Intervals', () => {

  it( 'e.g. 1', () => {
    const nums = [5,0,3,8,6];
    expect( partitionDisjoint( nums ) ).toBe( 3 );
  } );

  it( 'e.g. 2', () => {
    const nums = [1,1,1,0,6,12];
    expect( partitionDisjoint( nums ) ).toBe( 4 );
  } );

} );
