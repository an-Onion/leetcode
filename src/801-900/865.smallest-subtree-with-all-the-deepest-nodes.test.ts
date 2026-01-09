import { TreeNode } from '@/dataStructure/TreeNode';

function subtreeWithAllDeepest( root: TreeNode | null ): TreeNode | null {
    return DFS( root )[0];

    function DFS( node: TreeNode | null ): [TreeNode | null, number] {
        if ( !node ) return [null, 0];
        const [left, leftDepth] = DFS( node.left );
        const [right, rightDepth] = DFS( node.right );
        if ( leftDepth === rightDepth ) return [node, leftDepth + 1];
        return leftDepth > rightDepth
            ? [left, leftDepth + 1]
            : [right, rightDepth + 1];
    }
}

describe( '865. Smallest Subtree with all the Deepest Nodes', () => {
    it( 'case 1', () => {
        const root = TreeNode.of( [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4] );
        const subtree = subtreeWithAllDeepest( root );
        expect( TreeNode.toArray( subtree ) ).toStrictEqual( [2, 7, 4] );
    } );

    it( 'case 2', () => {
        const root = TreeNode.of( [1] );
        const subtree = subtreeWithAllDeepest( root );
        expect( TreeNode.toArray( subtree ) ).toStrictEqual( [1] );
    } );
} );
