import { lowestCommonAncestor } from '../src/201-300/236.lowest-common-ancestor-of-a-binary-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Lowest Common Ancestor of a Binary Tree', () => {

  it( '[3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1', () => {
    const root = TreeNode.of( [3,5,1,6,2,0,8,undefined,undefined,7,4] );
    const p = root.left;
    const q = root.right;
    expect( lowestCommonAncestor( root, p, q ).val ).toBe( 3 );
  } );

  it( '[3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4', () => {
    const root = TreeNode.of( [3,5,1,6,2,0,8,undefined,undefined,7,4] );
    const p = root.left; // 4
    const q = root.left.right.right; // 4
    expect( lowestCommonAncestor( root, p, q ).val ).toBe( 5 );
  } );

  it( '[1,2], p = 1, q = 2', () => {
    const root = TreeNode.of( [1,2] );
    const p = root;
    const q = root.left;
    expect( lowestCommonAncestor( root, p, q ).val ).toBe( 1 );
  } );
} );
