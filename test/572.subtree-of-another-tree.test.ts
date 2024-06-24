import { isSubtree } from '../src/501-600/572.subtree-of-another-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Subtree of Another Tree', () => {
  it( '[3,4,5,1,2] & [4,1,2]', () => {
    const s = TreeNode.of( [3, 4, 5, 1, 2] );
    const t = TreeNode.of( [4, 1, 2] );
    expect( isSubtree( s, t ) ).toBeTruthy();
  } );

  it( '[3,4,5,1,2, undefined, undefined, undefined, undefined, 0] & [4,1,2]', () => {
    const s = TreeNode.of( [3, 4, 5, 1, 2, null, null, null, null, 0] );
    const t = TreeNode.of( [4, 1, 2] );
    expect( isSubtree( s, t ) ).toBeFalsy();
  } );
} );
