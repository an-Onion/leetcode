import { TreeNode } from './dataStructure/TreeNode';

function postorderTraversal( root: TreeNode | null ): number[] {
    function DFS( node: TreeNode | null, next: ( params: number[] ) => number[] ) {
        if( !node ) return next( [] );
        return DFS( node.left, ( left ) => {
            return DFS( node.right, ( right ) => {
                return next( [...left,  ...right, node.val] );
            } );
        } );
    }
    return DFS( root, ( result ) => result );
}

describe( '145.binary-tree-postorder-traversal', () => {
    it( '[1,null,2,3]', () => {
        const root = TreeNode.of( [1,null,2,3] );
        expect( postorderTraversal( root ) ).toStrictEqual( [3,2,1] );
    } );

    it( '[]', () => {
        const root = TreeNode.of( [] );
        expect( postorderTraversal( root ) ).toStrictEqual( [] );
    } );

    it( '[1,2,3,4]', () => {
        const root = TreeNode.of( [1,2,3,4] );
        expect( postorderTraversal( root ) ).toStrictEqual( [4,2,3,1] );
    } );

    it( '[1]', () =>{
        const root = TreeNode.of( [1] );
        expect( postorderTraversal( root ) ).toStrictEqual( [1] );
    } );
} );