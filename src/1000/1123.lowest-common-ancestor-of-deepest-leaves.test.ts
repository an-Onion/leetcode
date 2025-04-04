import { TreeNode } from '../dataStructure/TreeNode';

function lcaDeepestLeaves( root: TreeNode | null ): TreeNode | null {
    return DFS( root, 0 )[0]; // return the first elemen

    function DFS( node: TreeNode | null, depth: number ): [TreeNode, number] {
        if ( !node ) return [null, depth];
        const [left, leftDepth] = DFS( node.left, depth + 1 );
        const [right, rightDepth] = DFS( node.right, depth + 1 );
        if ( leftDepth > rightDepth ) return [left, leftDepth];
        if ( leftDepth < rightDepth ) return [right, rightDepth];
        return [node, leftDepth];
    }
}

describe( '1123. Lowest Common Ancestor of Deepest Leaves', () => {
    it( 'case 1', () => {
        const root = TreeNode.of( [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4] );
        const lca = lcaDeepestLeaves( root );
        expect( lca.toArray() ).toStrictEqual( [2, 7, 4, null, null, null, null] );
    } );

    it( 'case 2', () => {
        const root = TreeNode.of( [1] );
        const lca = lcaDeepestLeaves( root );
        expect( lca.toArray() ).toStrictEqual( [1, null, null] );
    } );

    it( 'case 3', () => {
        const root = TreeNode.of( [0, 1, 3, null, 2] );
        const lca = lcaDeepestLeaves( root );
        expect( lca.toArray() ).toStrictEqual( [2, null, null] );
    } );
} );
