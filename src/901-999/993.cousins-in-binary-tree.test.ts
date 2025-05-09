import { TreeNode } from '../dataStructure/TreeNode';

function isCousins( root: TreeNode | null, x: number, y: number ): boolean {
    let cur = [root];
    while ( cur.length ) {
        const next = [];
        const set = new Set();
        for ( const parent of cur ) {
            for ( const child of [parent.left, parent.right] ) {
                if ( child ) {
                    next.push( child );
                    if ( child.val === x || child.val === y ) {
                        set.add( parent );
                    }
                }
            }
        }

        if ( set.size === 2 ) {
            return true;
        }
        if ( set.size === 1 ) {
            return false;
        }
        cur = next;
    }
    return false;
}

describe( '993. Cousins in Binary Tree', () => {
    it( 'case 1', () => {
        const root = TreeNode.of( [1, 2, 3, 4] );
        expect( isCousins( root, 4, 3 ) ).toBe( false );
    } );

    it( 'case 2', () => {
        const root = TreeNode.of( [1, 2, 3, null, 4, null, 5] );
        expect( isCousins( root, 5, 4 ) ).toBe( true );
    } );

    it( 'case 3', () => {
        const root = TreeNode.of( [1, 2, 3, null, 4] );
        expect( isCousins( root, 2, 3 ) ).toBe( false );
    } );
} );
