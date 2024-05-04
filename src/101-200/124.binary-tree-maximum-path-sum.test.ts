import { TreeNode } from '../dataStructure/TreeNode';

function maxPathSum( root: TreeNode | null ): number {

    const sub = new Map<TreeNode | null, number>();

    function DFS( node: TreeNode | null , next: ( ret: number ) => void ): void {

        if( !node ) return next( 0 );

        return DFS( node.left, ( left ) => {
            return DFS( node.right, ( right ) => {
                const ret = Math.max( left, 0 ) + Math.max( right, 0 ) + node.val;
                sub.set( node, ret );
                return next( Math.max( 0, left, right  ) + + node.val );
            } );
        } );
    }

    DFS( root, () => {} );

    return Math.max( ...sub.values() );
}

describe( '124. binary-tree-maximum-path-sum', () => {
    it( '1,2,3', () => {
        const root = TreeNode.of( [1,2,3] );
        expect( maxPathSum( root ) ).toBe( 6 );
    } );

    it( '-10,9,20,null,null,15,7', () => {
        const root = TreeNode.of( [-10,9,20,null,null,15,7] );
        expect( maxPathSum( root ) ).toBe( 42 );
    } );

    it( '5,4,8,11,null,13,4,7,2,null,null,null,1', () => {
        const root = TreeNode.of( [5,4,8,11,null,13,4,7,2,null,null,null,1] );
        expect( maxPathSum( root ) ).toBe( 48 );
    } );
} );