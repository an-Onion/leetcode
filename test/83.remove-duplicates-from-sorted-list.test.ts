import { deleteDuplicates } from '../src/1-100/83.remove-duplicates-from-sorted-list';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Remove Duplicates from Sorted List', () => {
  it( '1,1,2', () => {
    const input = ListNode.of( [1,1,2] );
    const output = ListNode.toArray( deleteDuplicates( input ) );
    expect( output ).toStrictEqual( [1,2] );
  } );

  it( '1,1,2,3,3', () => {
    const input = ListNode.of( [1,1,2,3,3] );
    const output = ListNode.toArray( deleteDuplicates( input ) );
    expect( output ).toStrictEqual( [1,2,3] );
  } );
} );
