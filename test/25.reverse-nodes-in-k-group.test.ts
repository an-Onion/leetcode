import { reverseKGroup } from '../src/1-100/25.reverse-nodes-in-k-group';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Reverse Nodes in k-Group', () => {

  it( 'head = [1,2,3,4,5], k = 2', () => {
    const input = ListNode.of( [1,2,3,4,5] );
    const output = ListNode.toArray( reverseKGroup( input, 2 ) );
    expect( output ).toStrictEqual( [2,1,4,3,5] );
  } );

  it( 'head = [1,2,3,4,5], k = 3', () => {
    const input = ListNode.of( [1,2,3,4,5] );
    const output = ListNode.toArray( reverseKGroup( input, 3 ) );
    expect( output ).toStrictEqual( [3,2,1,4,5] );
  } );

  it( 'head = [1,2,3,4,5], k = 1', () => {
    const input = ListNode.of( [1,2,3,4,5] );
    const output = ListNode.toArray( reverseKGroup( input, 1 ) );
    expect( output ).toStrictEqual( [1,2,3,4,5] );
  } );

  it( 'head = [1], k = 1', () => {
    const input = ListNode.of( [1] );
    const output = ListNode.toArray( reverseKGroup( input, 1 ) );
    expect( output ).toStrictEqual( [1] );
  } );
} );
