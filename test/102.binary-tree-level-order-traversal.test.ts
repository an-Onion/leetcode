import { levelOrder } from '../src/102.binary-tree-level-order-traversal';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Binary Tree Level Order Traversal', () => {

  it( '[3,9,20,null,null,15,7]', () => {

    const input = TreeNode.of( [3,9,20,null,null,15,7] );
    expect( levelOrder( input ) ).toStrictEqual( [[3],[9,20],[15,7]] );
  } );

  it( '[1]', () => {

    const input = TreeNode.of( [1] );
    expect( levelOrder( input ) ).toStrictEqual( [[1]] );
  } );

  it( '[]', () => {

    const input = TreeNode.of( [] );
    expect( levelOrder( input ) ).toStrictEqual( [] );
  } );

} );
