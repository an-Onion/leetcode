import { TreeNode } from '../src/dataStructure/TreeNode';
import { hasPathSum } from '../src/112.path-sum';

describe( 'Path Sum', () => {

  it( 'root = [1,-2,-3,1,3,-2,null,-1], targetSum =2', () => {
    const root = TreeNode.of( [1,-2,-3,1,3,-2,null,-1] );
    expect( hasPathSum( root, 2 ) ).toBeTruthy();
  } );

  it( 'root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22', () => {
    const root = TreeNode.of( [5,4,8,11,null,13,4,7,2,null,null,null,1] );
    expect( hasPathSum( root, 22 ) ).toBeTruthy();
  } );

  it( 'root = [1,2,3], targetSum = 5', () => {
    const root = TreeNode.of( [1,2,3] );
    expect( hasPathSum( root, 5 ) ).toBeFalsy();
  } );

  it( 'root = [1,2], targetSum = 0', () => {
    const root = TreeNode.of( [1,2] );
    expect( hasPathSum( root, 0 ) ).toBeFalsy();
  } );

  it( 'root = [], targetSum = 0', () => {
    const root = TreeNode.of( [] );
    expect( hasPathSum( root, 0 ) ).toBeFalsy();
  } );

  it( 'root = [1,2], targetSum = 1', () => {
    const root = TreeNode.of( [1,2] );
    expect( hasPathSum( root, 1 ) ).toBeFalsy();
  } );

} );
