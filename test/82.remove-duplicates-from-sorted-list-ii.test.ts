import { deleteDuplicates } from '../src/82.remove-duplicates-from-sorted-list-ii';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Remove Duplicates from Sorted List II', () => {

  it( '1,2,3,3,4,4,5', () => {
    const input = ListNode.of( [1,2,3,3,4,4,5] );
    const output = ListNode.toArray( deleteDuplicates( input ) );
    expect( output ).toStrictEqual( [1,2,5] );
  } );

  it( '1,1,1,2,3', () => {
    const input = ListNode.of( [1,1,1,2,3] );
    const output = ListNode.toArray( deleteDuplicates( input ) );
    expect( output ).toStrictEqual( [2,3] );
  } );

} );
