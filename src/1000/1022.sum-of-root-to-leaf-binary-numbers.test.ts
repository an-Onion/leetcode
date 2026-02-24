import { TreeNode } from '../dataStructure/TreeNode';

function sumRootToLeaf( root: TreeNode | null ): number {
    return DFS( root, 0, ( ret ) => ret );

    function DFS(
        node: TreeNode | null,
        sum: number,
        next: ( val: number ) => number,
    ): number {
        if ( !node ) return next( 0 );
        sum = ( sum << 1 ) | node.val;
        if ( node.left === node.right ) return next( sum );

        return DFS( node.left, sum, ( left ) =>
            DFS( node.right, sum, ( right ) => next( left + right ) ),
        );
    }
}

describe( '1022. Sum Of root To leaf Binary Numbers', () => {
    it( 'case 1', () => {
        const root = TreeNode.of( [1, 0, 1, 0, 1, 0, 1] );
        expect( sumRootToLeaf( root ) ).toBe( 22 );
    } );

    it( 'case 2', () => {
        const root = TreeNode.of( [0] );
        expect( sumRootToLeaf( root ) ).toBe( 0 );
    } );

    it( 'case 3', () => {
        const root = TreeNode.of( [1] );
        expect( sumRootToLeaf( root ) ).toBe( 1 );
    } );

    it( 'case 4', () => {
        const root = TreeNode.of( [1, 1] );
        expect( sumRootToLeaf( root ) ).toBe( 3 );
    } );
} );
