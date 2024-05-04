import { ListNode } from '../dataStructure/ListNode';

function reorderList( head: ListNode | null ): void {

    const dummy = new ListNode( 0, head );
    // find middle
    let slow = dummy, fast = dummy;
    while ( fast && fast.next ) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half
    let prev = slow.next;
    slow.next = null;
    while( prev ) {
        const next = prev.next;
        prev.next = slow.next;
        slow.next = prev;
        prev = next;
    }
    let reverted = slow.next;
    slow.next = null;
    // merge
    prev = head;
    while ( prev && reverted ) {
        const next = prev.next;
        prev.next = reverted;
        reverted = reverted.next;

        prev.next.next = next;
        prev = next;
    }
}

describe( '143. reorder list', () => {

    it( '[1]', () => {
        const head = ListNode.of( [1] );
        reorderList( head );
        expect( ListNode.toArray( head ) ).toStrictEqual( [ 1 ] );
    } );


    it( '[1,2]', () => {
        const head = ListNode.of( [1, 2] );
        reorderList( head );
        expect( ListNode.toArray( head ) ).toStrictEqual( [ 1, 2 ] );
    } );

    it( '[1,2,3]', () => {
        const head = ListNode.of( [1, 2, 3] );
        reorderList( head );
        expect( ListNode.toArray( head ) ).toStrictEqual( [ 1, 3, 2 ] );
    } );

    it( '[1,2,3,4]', () => {
        const head = ListNode.of( [1, 2, 3, 4] );
        reorderList( head );
        expect( ListNode.toArray( head ) ).toStrictEqual( [ 1, 4, 2, 3 ] );
    } );

    it( '[1,2,3,4,5]', () => {
        const head = ListNode.of( [1, 2, 3, 4, 5] );
        reorderList( head );
        expect( ListNode.toArray( head ) ).toStrictEqual( [ 1, 5, 2, 4, 3 ] );
    } );
} );

