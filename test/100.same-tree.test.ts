import { TreeNode } from '../src/dataStructure/TreeNode';
import { isSameTree } from '../src/1-100/100.same-tree';

describe( 'Same Tree', () => {

  it( 'p = [1,2,3], q = [1,2,3]', () => {
    const p = TreeNode.of( [1,2,3] );
    const q = TreeNode.of( [1,2,3] );
    expect( isSameTree( p, q ) ).toBeTruthy();
  } );

  it( 'p = [1,2], q = [1,null,2]', () => {
    const p = TreeNode.of( [1,2] );
    const q = TreeNode.of( [1,null,2] );
    expect( isSameTree( p, q ) ).toBeFalsy();
  } );

  it( 'p = [1,2,1], q = [1,1,2]', () => {
    const p = TreeNode.of( [1,2,1] );
    const q = TreeNode.of( [1,1,2] );
    expect( isSameTree( p, q ) ).toBeFalsy();
  } );
} );
