import { isValidBST } from '../src/1-100/98.validate-binary-search-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Validate Binary Search Tree', () => {

  it( '[2,1,3]', () => {
    const input = TreeNode.of( [2,1,3] );
    expect( isValidBST( input ) ).toBeTruthy();
  } );

  it( '[5,1,4,null,null,3,6]', () => {
    const input = TreeNode.of( [5,1,4,null,null,3,6] );
    expect( isValidBST( input ) ).toBeFalsy();
  } );

} );
