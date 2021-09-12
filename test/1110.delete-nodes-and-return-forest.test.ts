import { delNodes } from '../src/1110.delete-nodes-and-return-forest';
import { TreeNode } from '../src/dataStructure/TreeNode';

describe( 'Delete Nodes And Return Forest', () => {
  it( 'root = [1,2], to_delete = [1]', () => {
    const root = [1,2], to_delete = [1];
    const output: number[][] = delNodes( TreeNode.of( root ), to_delete ).map( ( tree ) => TreeNode.toArray( tree ) );
    expect( output ).toStrictEqual( [[2]] );
  } );

  it( 'root = [1,2,3,4,5,6,7], to_delete = [3,5]', () => {
    const root = [1,2,3,4,5,6,7], to_delete = [3,5];
    const output: number[][] = delNodes( TreeNode.of( root ), to_delete ).map( ( tree ) => TreeNode.toArray( tree ) );
    expect( output ).toStrictEqual( [[1,2,null,4],[6],[7]] );
  } );

  it( 'root = [1,2,4,null,3], to_delete = [3]', () => {
    const root = [1,2,4,null,3], to_delete = [3];
    const output: number[][] = delNodes( TreeNode.of( root ), to_delete ).map( ( tree ) => TreeNode.toArray( tree ) );
    expect( output ).toStrictEqual( [[1,2,4]] );
  } );
} );
