import { flipMatchVoyage } from '../src/971.flip-binary-tree-to-match-preorder-traversal';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Flip Binary tree To match Preorder Traversal', () => {

  it( 'e.g. 1', () => {
    const root = TreeNode.of( [1,2] ), voyage = [2,1];
    expect( flipMatchVoyage( root, voyage ) ).toStrictEqual( [-1] );
  } );

  it( 'e.g. 2', () => {
    const root = TreeNode.of( [1,2,3] ), voyage = [1,3,2];
    expect( flipMatchVoyage( root, voyage ) ).toStrictEqual( [1] );
  } );

  it( 'e.g. 3', () => {
    const root = TreeNode.of( [1,2,3] ), voyage = [1,2,3];
    expect( flipMatchVoyage( root, voyage ) ).toStrictEqual( [] );
  } );

  it( 'e.g. 4', () => {
    const root = TreeNode.of( [1,2,null,3] ), voyage = [1,3,2];
    expect( flipMatchVoyage( root, voyage ) ).toStrictEqual( [-1] );
  } );

} );
