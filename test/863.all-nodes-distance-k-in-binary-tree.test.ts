import { distanceK } from '../src/801-900/863.all-nodes-distance-k-in-binary-tree';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'All Nodes Distance K in Binary Tree', () => {

  it( 'e.g. 1', () => {
    const root = TreeNode.of( [3,5,1,6,2,0,8,null,null,7,4] );
    const target = new TreeNode( 5 ), k = 2;
    const output = distanceK( root, target, k );
    expect( output.sort() ).toStrictEqual( [7,4,1].sort() );
  } );

  it( 'e.g. 2', () => {
    const root = TreeNode.of( [1] );
    const target = new TreeNode( 1 ), k = 3;
    const output = distanceK( root, target, k );
    expect( output.sort() ).toStrictEqual( [].sort() );
  } );

} );
