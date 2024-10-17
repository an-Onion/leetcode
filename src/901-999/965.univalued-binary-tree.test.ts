import { TreeNode } from '../dataStructure/TreeNode';

function isUnivalTree( root: TreeNode | null ): boolean {
    return DFS( root );

    function DFS( node: TreeNode | null ) {
        if ( !node ) return true;
        if ( root.val !== node.val ) return false;
        return DFS( node.left ) && DFS( node.right );
    }
}

describe( '965.univalued-binary-tree', () => {
    it( 'case 1', () => {
        const root = TreeNode.of( [1, 1, 1, 1, 1, null, 1] );
        expect( isUnivalTree( root ) ).toBe( true );
    } );

    it( 'case 2', () => {
        const root = TreeNode.of( [2, 2, 2, 5, 2] );
        expect( isUnivalTree( root ) ).toBe( false );
    } );
} );
