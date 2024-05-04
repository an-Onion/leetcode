import { TreeNode } from '../dataStructure/TreeNode';

function invertTree( root: TreeNode | null ): TreeNode | null {
    if( !root ) return null;

    const left = invertTree( root.left );
    const right = invertTree( root.right );
    root.left = right;
    root.right = left;
    return root;
}

describe( '226. invert-binary-tree', () => {
    it( '[4,2,7,1,3,6,9]', () => {
        const root = TreeNode.of( [4,2,7,1,3,6,9] );
        const output = invertTree( root );
        expect( TreeNode.toArray( output ) ).toStrictEqual( [4,7,2,9,6,3,1] );
    } );

    it( '[2,1,3]', () => {
        const root = TreeNode.of( [2,1,3] );
        const output = invertTree( root );
        expect( TreeNode.toArray( output ) ).toStrictEqual( [2,3,1] );
    } );

    it( '[]', () => {
        const root = TreeNode.of( [] );
        const output = invertTree( root );
        expect( TreeNode.toArray( output ) ).toStrictEqual( [] );

    } );
} );