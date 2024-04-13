import { reverseBetween } from '../src/1-100/92.reverse-linked-list-ii';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Reverse Linked list II', () => {

  it( '[1,2,3,4,5], 2, 4', () => {
    const input = ListNode.of( [1,2,3,4,5] );
    const output = reverseBetween( input,2,4 );
    expect( ListNode.toArray( output ) ).toStrictEqual( [1,4,3,2,5] );
  } );

  it( '[5], 1, 1', () => {
    const input = ListNode.of( [5] );
    const output = reverseBetween( input,1,1 );
    expect( ListNode.toArray( output ) ).toStrictEqual( [5] );
  } );

} );
