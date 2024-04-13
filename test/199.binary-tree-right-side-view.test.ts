import { TreeNode } from '../src/dataStructure/TreeNode';
import { rightSideView } from '../src/101-200/199.binary-tree-right-side-view';

describe( 'Binary Tree Right Side View', () => {

  it( '[1,2,3,null,5,null,4]', () => {
    const input = TreeNode.of( [1,2,3,null,5,null,4] );
    expect( rightSideView( input ) ).toEqual( [1,3,4] );
  } );

  it( '[1,null,3]', () => {
    const input = TreeNode.of( [1,null,3] );
    expect( rightSideView( input ) ).toEqual( [1,3] );
  } );

  it( '[]', () => {
    const input = TreeNode.of( [] );
    expect( rightSideView( input ) ).toEqual( [] );
  } );

} );
