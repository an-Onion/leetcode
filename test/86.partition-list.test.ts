import { ListNode } from '../src/dataStructure/ListNode';
import { partition } from '../src/86.partition-list';

describe( 'Partition List', () => {
  it( '[1,4,3,2,5,2], 3', () => {
    const input = ListNode.of( [1,4,3,2,5,2] );
    const output = ListNode.toArray( partition( input, 3 ) );

    expect( output ).toStrictEqual( [1,2,2,4,3,5] );
  } );

  it( '[2,1], 1', () => {
    const input = ListNode.of( [2,1] );
    const output = ListNode.toArray( partition( input, 2 ) );

    expect( output ).toStrictEqual( [1,2] );
  } );
} );
