import { TreeNode } from '../src/dataStructure/TreeNode';
import { flatten } from '../src/101-200/114.flatten-binary-tree-to-linked-list';

describe( 'Flatten Binary Tree to Linked List', () => {

  it( '[1,2,5,3,4,null,6]', () => {
    const root = TreeNode.of( [1,2,5,3,4,null,6] );
    flatten( root );
    expect( TreeNode.toArray( root ) ).toEqual( [1,null,2,null,3,null,4,null,5,null,6] );
  } );

  it( '[]', () => {
    const root = TreeNode.of( [] );
    flatten( root );
    expect( TreeNode.toArray( root ) ).toEqual( [] );
  } );

  it( '[0]', () => {
    const root = TreeNode.of( [0] );
    flatten( root );
    expect( TreeNode.toArray( root ) ).toEqual( [0] );
  } );

  it( '[0, 1]', () => {
    const root = TreeNode.of( [0, 1] );
    flatten( root );
    expect( TreeNode.toArray( root ) ).toEqual( [0, null ,1] );
  } );

  it( '[0, null, 1]', () => {
    const root = TreeNode.of( [0, 1] );
    flatten( root );
    expect( TreeNode.toArray( root ) ).toEqual( [0, null ,1] );
  } );

} );
