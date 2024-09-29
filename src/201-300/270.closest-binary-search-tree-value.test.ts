import { TreeNode } from '../dataStructure/TreeNode';

function closestValue( root: TreeNode | null, target: number ): number {
    let ret = root.val;

    let node = root;

    while ( node ) {
        if (
            Math.abs( node.val - target ) < Math.abs( ret - target ) ||
            ( Math.abs( node.val - target ) === Math.abs( ret - target ) &&
                node.val < ret )
        ) {
            ret = node.val;
        }

        if ( node.val < target ) {
            node = node.right;
        } else if ( node.val > target ) {
            node = node.left;
        } else break;
    }

    return ret;
}

describe( 'closest-binary-search-tree-value', () => {
    it( 'should return 4', () => {
        const root = TreeNode.of( [4, 2, 5, 1, 3] );
        expect( closestValue( root, 3.714286 ) ).toBe( 4 );
    } );

    it( 'should return 1', () => {
        const root = TreeNode.of( [1] );
        expect( closestValue( root, 4.428571 ) ).toBe( 1 );
    } );
} );
