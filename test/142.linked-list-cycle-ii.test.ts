import { detectCycle } from '../src/142.linked-list-cycle-ii';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Linked List Cycle II', () => {

  it( 'head = [3,2,0,-4], pos = 1', () => {
    const head = ListNode.of( [3,2,0,-4] );
    const tail = ListNode.getTail( head );
    tail.next = head.next;
    const output = detectCycle( head );
    expect( output.val ).toBe( 2 );
  } );

  it( 'head = [1,2], pos = 0', () => {
    const head = ListNode.of( [1,2] );
    const tail = ListNode.getTail( head );
    tail.next = head;
    const output = detectCycle( head );
    expect( output.val ).toBe( 1 );
  } );

  it( 'head = [1], pos = -1', () => {
    const head = ListNode.of( [1] );
    const output = detectCycle( head );
    expect( output ).toBeNull();
  } );


} );

