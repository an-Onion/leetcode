import { lowestCommonAncestor } from '../src/236.lowest-common-ancestor-of-a-binary-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Lowest Common Ancestor of a Binary Tree', () => {

  it( '[3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1', () => {
    const root = TreeNode.of( [3,5,1,6,2,0,8,undefined,undefined,7,4] );
    const p = new TreeNode( 5 );
    const q = new TreeNode( 1 );
    expect( lowestCommonAncestor( root, p, q ).val ).toBe( 3 );
  } );

  it( '[3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4', () => {
    const root = TreeNode.of( [3,5,1,6,2,0,8,undefined,undefined,7,4] );
    const p = new TreeNode( 5 );
    const q = new TreeNode( 4 );
    expect( lowestCommonAncestor( root, p, q ).val ).toBe( 5 );
  } );

  it( '[1,2], p = 1, q = 2', () => {
    const root = TreeNode.of( [1,2] );
    const p = new TreeNode( 1 );
    const q = new TreeNode( 2 );
    expect( lowestCommonAncestor( root, p, q ).val ).toBe( 1 );
  } );
} );
