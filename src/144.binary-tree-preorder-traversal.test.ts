import { TreeNode } from './dataStructure/TreeNode';

function preorderTraversal( root: TreeNode | null ): number[] {
    
    function DFS( node: TreeNode | null, next: ( params: number[] ) => number[] ): number[] {
        
        if( !node ) return next( [] );
        
        return DFS( node.left, ( left ) => DFS( node.right, ( right ) => next( [node.val, ...left, ...right] ) ) );
    }
    return DFS( root, ( result ) => result );
}

describe( '144.binary-tree-preorder-traversal', () => {
    
    it( '[1,null,2,3]', () => {
        const root = TreeNode.of( [1,null,2,3] );
        expect( preorderTraversal( root ) ).toStrictEqual( [1,2,3] );
    } );

    it( '[]', () => {
        const root = TreeNode.of( [] );
        expect( preorderTraversal( root ) ).toStrictEqual( [] );
    } );

    it( '[1]', () => {
        const root = TreeNode.of( [1] );
        expect( preorderTraversal( root ) ).toStrictEqual( [1] );
    } );

    it( '[1,2]', () => {
        const root = TreeNode.of( [1,2] );
        expect( preorderTraversal( root ) ).toStrictEqual( [1,2] );
    } );

    it( '[1,null,2]', () => {
        const root = TreeNode.of( [1,null,2] );
        expect( preorderTraversal( root ) ).toStrictEqual( [1,2] );
    } );
} );