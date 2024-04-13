import { mergeTwoLists } from '../src/1-100/21.merge-two-sorted-lists';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'erge-two-sorted-lists', () => {
  it( '[1,1,2,3,4,4]', () => {
    const l1 = ListNode.of( [1,2,4] );
    const l2 = ListNode.of( [1,3,4] );
    const list = mergeTwoLists( l1, l2 );

    expect( list.toArray() ).toStrictEqual( [1,1,2,3,4,4] );
  } );


  it( '[]', () => {
    expect( mergeTwoLists( null, null ) ).toBe( null );
  } );


  it( '[0]', () => {
    const l1 = ListNode.of( [] );
    const l2 = ListNode.of( [0] );
    const list = mergeTwoLists( l1, l2 );

    expect( list.toArray() ).toStrictEqual( [0] );
  } );
} );
