import { TreeNode } from '@/dataStructure/TreeNode';

function getTargetCopy(
    original: TreeNode | null,
    cloned: TreeNode | null,
    target: TreeNode | null,
): TreeNode | null {
    if ( original === null || original === target ) {
        return cloned;
    }
    return (
        getTargetCopy( original.left, cloned.left, target ) ??
        getTargetCopy( original.right, cloned.right, target )
    );
}

describe( '1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree', () => {
    it( 'case 1', () => {
        const original = TreeNode.of( [7, 4, 3, null, null, 6, 19] );
        const cloned = TreeNode.of( [7, 4, 3, null, null, 6, 19] );
        const target = original.left;
        expect( getTargetCopy( original, cloned, target ) ).toBe( cloned.left );
    } );

    it( 'case 2', () => {
        const original = TreeNode.of( [7] );
        const cloned = TreeNode.of( [7] );
        const target = original;
        expect( getTargetCopy( original, cloned, target ) ).toBe( cloned );
    } );

    it( 'case 3', () => {
        const original = TreeNode.of( [
            8,
            null,
            6,
            null,
            5,
            null,
            4,
            null,
            3,
            null,
            2,
            null,
            1,
        ] );
        const cloned = TreeNode.of( [
            8,
            null,
            6,
            null,
            5,
            null,
            4,
            null,
            3,
            null,
            2,
            null,
            1,
        ] );
        const target = original.right.right.right;
        expect( getTargetCopy( original, cloned, target ) ).toBe(
            cloned.right.right.right,
        );
    } );
} );
