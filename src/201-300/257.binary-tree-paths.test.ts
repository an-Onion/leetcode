import { TreeNode } from '../dataStructure/TreeNode';

function binaryTreePaths( root: TreeNode | null ): string[] {

    function DFS( node: TreeNode | null, next: ( paths: string[] ) => string[] ): string[] {
        if( !node ) return next( [] );

        if( node.left === node.right ) return next( [`${node.val}`] );

        return DFS( node.left, ( left ) => {
            return DFS( node.right, ( right ) => {
                const paths = [...left, ...right]
                    .map( ( path ) => `${node.val}->${path}` );
                return next( paths );
            } );
        } );
    }

    return DFS( root, ( paths ) => paths );
}

describe( '257. binary-tree-paths', () => {

    it( '[1,2,3,null,5]', () => {
        const root = TreeNode.of( [1,2,3,null,5] );
        expect( binaryTreePaths( root ) ).toStrictEqual( ['1->2->5', '1->3'] );
    } );

    it( '[1]', () => {
        const root = TreeNode.of( [1] );
        expect( binaryTreePaths( root ) ).toStrictEqual( ['1'] );
    } );

} );