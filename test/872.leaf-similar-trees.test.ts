import { leafSimilar } from '../src/801-900/872.leaf-similar-trees';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Leaf-Similar Trees', () => {

  it( 'e.g. 1', () => {
    const root1 = TreeNode.of( [3,5,1,6,2,9,8,null,null,7,4] );
    const root2 = TreeNode.of( [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8] );
    expect( leafSimilar( root1, root2 ) ).toBeTruthy();
  } );

  it( 'e.g. 2', () => {
    const root1 = TreeNode.of( [1] );
    const root2 = TreeNode.of( [1] );
    expect( leafSimilar( root1, root2 ) ).toBeTruthy();
  } );

  it( 'e.g. 3', () => {
    const root1 = TreeNode.of( [1] );
    const root2 = TreeNode.of( [2] );
    expect( leafSimilar( root1, root2 ) ).toBeFalsy();
  } );


} );
