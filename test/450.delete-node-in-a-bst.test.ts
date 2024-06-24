import { deleteNode } from '../src/401-500/450.delete-node-in-a-bst';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Delete Node in a BST', () => {

  it( 'root = [5,3,6,2,4,null,7], key = 3', () => {
    const root: TreeNode = TreeNode.of( [5,3,6,2,4,null,7] );
    const output: TreeNode = deleteNode( root, 3 );
    expect( TreeNode.toArray( output ) ).toStrictEqual( [5,4,6,2,null,null,7] );
  } );


  it( 'root = [5,3,6,2,4,null,7], key = 0', () => {
    const root: TreeNode = TreeNode.of( [5,3,6,2,4,null,7] );
    const output: TreeNode = deleteNode( root, 0 );
    expect( TreeNode.toArray( output ) ).toStrictEqual( [5,3,6,2,4,null,7] );
  } );

  it( 'root = [5,3,6,2,4,null,7], key = 5', () => {
    const root: TreeNode = TreeNode.of( [5,3,6,2,4,null,7] );
    const output: TreeNode = deleteNode( root, 5 );
    expect( TreeNode.toArray( output ) ).toStrictEqual( [6,3,7,2,4] );
  } );

  it( 'root = , key = 0', () => {
    const root: TreeNode = TreeNode.of( [] );
    const output: TreeNode = deleteNode( root, 0 );
    expect( TreeNode.toArray( output ) ).toStrictEqual( [] );
  } );

} );
