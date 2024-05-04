import { TreeNode } from '../dataStructure/TreeNode';

function lowestCommonAncestor( root: TreeNode | null, p: TreeNode | null, q: TreeNode | null ): TreeNode | null {

    const less = Math.min( p.val, q.val );
    const greater = Math.max( p.val, q.val );

    while ( root ) {
        if( root.val < less )
            root = root.right;
        else if( root.val > greater )
            root = root.left;
        else
            break;

    }
    return root;
}

describe( '235. lowest-common-ancestor-of-a-binary-search-tree', () => {

    it( 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', () => {
        const root = TreeNode.of( [6,2,8,0,4,7,9,null,null,3,5] );
        const p = root.left;
        const q = root.right;
        expect( lowestCommonAncestor( root, p, q ).val ).toEqual( root.val );
    } );

    it( 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', () => {
        const root = TreeNode.of( [6,2,8,0,4,7,9,null,null,3,5] );
        const p = root.left;
        const q = root.left.right;
        expect( lowestCommonAncestor( root, p, q ).val ).toEqual( p.val );
    } );

} );