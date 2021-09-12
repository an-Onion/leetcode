import { zigzagLevelOrder } from '../src/103.binary-tree-zigzag-level-order-traversal';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Binary Tree Zigzag Level Order Traversal', () => {

  it( '[3,9,20,null,null,15,7]', () => {

    const input = TreeNode.of( [3,9,20,null,null,15,7] );
    expect( zigzagLevelOrder( input ) ).toStrictEqual( [[3],[20,9],[15,7]] );
  } );

  it( '[1]', () => {

    const input = TreeNode.of( [1] );
    expect( zigzagLevelOrder( input ) ).toStrictEqual( [[1]] );
  } );

  it( '[]', () => {

    const input = TreeNode.of( [] );
    expect( zigzagLevelOrder( input ) ).toStrictEqual( [] );
  } );


} );
