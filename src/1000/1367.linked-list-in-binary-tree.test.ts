import { ListNode } from '../dataStructure/ListNode';
import { TreeNode } from '../dataStructure/TreeNode';

function isSubPath( head: ListNode | null, root: TreeNode | null ): boolean {
    if ( !root ) return false;

    return (
        DFS( head, root ) ||
        isSubPath( head, root.left ) ||
        isSubPath( head, root.right )
    );

    function DFS( list: ListNode | null, tree: TreeNode | null ): boolean {
        if ( !list ) return true;
        if ( !tree ) return false;
        if ( list.val !== tree.val ) return false;

        return DFS( list.next, tree.left ) || DFS( list.next, tree.right );
    }
}

describe( '1367. linked-list-in-binary-tree', () => {
    it( 'case 1', () => {
        const head = ListNode.of( [4, 2, 8] );
        const root = TreeNode.of( [
            1,
            4,
            4,
            null,
            2,
            2,
            null,
            1,
            null,
            6,
            8,
            null,
            null,
            null,
            null,
            1,
            3,
        ] );
        expect( isSubPath( head, root ) ).toBeTruthy();
    } );

    it( 'case 2', () => {
        const head = ListNode.of( [1, 4, 2, 6] );
        const root = TreeNode.of( [
            1,
            4,
            4,
            null,
            2,
            2,
            null,
            1,
            null,
            6,
            8,
            null,
            null,
            null,
            null,
            1,
            3,
        ] );
        expect( isSubPath( head, root ) ).toBeTruthy();
    } );

    it( 'case 2', () => {
        const head = ListNode.of( [1, 4, 2, 6, 8] );
        const root = TreeNode.of( [
            1,
            4,
            4,
            null,
            2,
            2,
            null,
            1,
            null,
            6,
            8,
            null,
            null,
            null,
            null,
            1,
            3,
        ] );
        expect( isSubPath( head, root ) ).toBeFalsy();
    } );
} );
