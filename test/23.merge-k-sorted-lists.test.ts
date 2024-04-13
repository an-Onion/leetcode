import { mergeKLists } from '../src/1-100/23.merge-k-sorted-lists';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Merge k Sorted Lists', () => {
  it( '[[1,4,5],[1,3,4],[2,6]]', () => {
    const lists = [ListNode.of( [1,4,5] ), ListNode.of( [1,3,4] ), ListNode.of( [2,6] )];
    expect( mergeKLists( lists ).toArray() ).toStrictEqual( [1,1,2,3,4,4,5,6] );
  } );

  it( '[]', () => {
    expect( mergeKLists( [] ) ).toBe( null );
  } );

  it( '[[]]', () => {
    expect( mergeKLists( [null] ) ).toBe( null );
  } );
} );
