import { isSymmetric } from '../src/101-200/101.symmetric-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Symmetric Tree', () => {

  it( '[1,2,2,3,4,4,3]', () => {
    const input = TreeNode.of( [1,2,2,3,4,4,3] );
    expect( isSymmetric( input ) ).toBeTruthy();
  } );

  it( '[1,2,2,null,3,null,3]', () => {
    const input = TreeNode.of( [1,2,2,null,3,null,3] );
    expect( isSymmetric( input ) ).toBeFalsy();
  } );

} );
