import { removeNthFromEnd } from '../src/19.remove-nth-node-from-end-of-list';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Remove Nth Node From End of List', () => {

  it( 'head = [1,2,3,4,5], n = 2',() =>{
    const input: ListNode = ListNode.of( [1,2,3,4,5] );
    const output: number[] = ListNode.toArray( removeNthFromEnd( input, 2 ) );
    expect( output ).toStrictEqual( [1,2,3,5] );
  } );

  it( 'head = [1], n = 1',() =>{
    const input: ListNode = ListNode.of( [1] );
    const output: number[] = ListNode.toArray( removeNthFromEnd( input, 1 ) );
    expect( output ).toEqual( [] );
  } );

  it( 'head = [1,2], n = 1',() =>{
    const input: ListNode = ListNode.of( [1,2] );
    const output: number[] = ListNode.toArray( removeNthFromEnd( input, 1 ) );
    expect( output ).toStrictEqual( [1] );
  } );

  it( 'head = [1,2], n = 2',() =>{
    const input: ListNode = ListNode.of( [1,2] );
    const output: number[] = ListNode.toArray( removeNthFromEnd( input, 2 ) );
    expect( output ).toStrictEqual( [2] );
  } );
} );
