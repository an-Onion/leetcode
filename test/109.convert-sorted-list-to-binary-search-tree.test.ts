import { sortedListToBST } from '../src/101-200/109.convert-sorted-list-to-binary-search-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';
import { ListNode } from '../src/dataStructure/ListNode';

describe( 'Convert Sorted List to Binary Search Tree', () => {

  it( '[]', () => {
    const input = ListNode.of( [] );
    const output = sortedListToBST( input );
    expect( TreeNode.toArray( output ) ).toStrictEqual( [] );
  } );

  it( '[0]', () => {
    const input = ListNode.of( [0] );
    const output = sortedListToBST( input );
    expect( TreeNode.toArray( output ) ).toStrictEqual( [0] );
  } );

  it( '[1，3]', () => {
    const input = ListNode.of( [1,3] );
    const output = sortedListToBST( input );
    expect( TreeNode.toArray( output ) ).toStrictEqual( [3,1] );
  } );

  it( '[-10,-3,0,5,9]', () => {
    const input = ListNode.of( [-10,-3,0,5,9] );
    const output = sortedListToBST( input );
    expect( TreeNode.toArray( output ) ).toStrictEqual( [0,-3,9,-10,null,5] );
  } );

} );
