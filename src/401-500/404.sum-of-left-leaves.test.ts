import { TreeNode } from '../dataStructure/TreeNode';

function sumOfLeftLeaves( root: TreeNode | null ): number {
    function DFS(
        node: TreeNode,
        isLeft: boolean,
        next: ( val: number ) => number,
    ) {
        if ( !node ) return next( 0 );
        if ( node.left === node.right ) return next( isLeft ? node.val : 0 );
        return DFS( node.left, true, ( left ) => {
            return DFS( node.right, false, ( right ) => {
                return next( left + right );
            } );
        } );
    }
    return DFS( root, false, ( val ) => val );
}

describe( '404. Sum of Left Leaves', () => {
    it( '[3,9,20,null,null,15,7] ', () => {
        const root = TreeNode.of( [3, 9, 20, null, null, 15, 7] );
        expect( sumOfLeftLeaves( root ) ).toBe( 24 );
    } );

    it( '[1]', () => {
        const root = TreeNode.of( [1] );
        expect( sumOfLeftLeaves( root ) ).toBe( 0 );
    } );
} );
