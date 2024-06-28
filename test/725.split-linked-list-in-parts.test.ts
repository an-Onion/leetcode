import { splitListToParts } from '../src/701-800/725.split-linked-list-in-parts';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Split Linked List in Parts', () => {

  it( 'e.g. 1', () => {
    const head = ListNode.of( [1,2,3] ), k = 5;
    const output: number[][] = splitListToParts( head, k )
    .map( ( list ) => ListNode.toArray( list ) );
    expect( output ).toStrictEqual( [[1],[2],[3],[],[]] );
  } );


  it( 'e.g. 2', () => {
    const head = ListNode.of( [1,2,3,4,5,6,7,8,9,10] ), k = 3;
    const output: number[][] = splitListToParts( head, k )
    .map( ( list ) => ListNode.toArray( list ) );
    expect( output ).toStrictEqual( [[1,2,3,4],[5,6,7],[8,9,10]] );
  } );

} );
