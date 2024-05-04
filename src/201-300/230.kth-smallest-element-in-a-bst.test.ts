import { TreeNode } from '../dataStructure/TreeNode';

function kthSmallest( root: TreeNode | null, k: number ): number {

    function count( node: TreeNode | null, next: ( ret: number ) => number ): number {
        if ( !node ) {
            return next( 0 );
        }
        return count( node.left, ( left ) => {
            return count( node.right, ( right ) => {
                return next( left + right + 1 );
            } );
        } );
    }

    function DFS( node: TreeNode | null, k: number ): number {
        const left = count( node.left, ( counter ) => counter );
        if ( k <= left ) {
            return kthSmallest( node.left, k );
        }
        if ( k === left + 1 ) {
            return node.val;
        }
        // k > left + 1
        return kthSmallest( node.right, k - left - 1 );
    }

    return DFS( root, k );
}

describe( '230. kth-smallest-element-in-a-bst', () => {


    it( 'root = [3,1,4,null,2], k = 1', () => {
        const root = TreeNode.of( [3,1,4,null,2] );
        expect( kthSmallest( root, 1 ) ).toBe( 1 );
    } );

    it( 'root = [5,3,6,2,4,null,null,1], k = 3', () => {
        const root = TreeNode.of( [5,3,6,2,4,null,null,1] );
        expect( kthSmallest( root, 3 ) ).toBe( 3 );
    } );


} );
