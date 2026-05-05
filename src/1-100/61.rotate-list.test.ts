import { ListNode } from '../dataStructure/ListNode';

export function rotateRight( head: ListNode | null, k: number ): ListNode | null {
    if ( !head || !head.next ) return head;

    // Calculate list length and find tail node
    let len = 1,
        tail = head;
    while ( tail.next ) {
        tail = tail.next;
        len++;
    }

    // Form a ring
    tail.next = head;

    // Find the new tail position
    // When k % len === 0, no rotation is needed
    let gap = len - ( k % len );
    while ( gap-- ) tail = tail.next;

    // Break the ring and return new head
    head = tail.next;
    tail.next = null;

    return head;
}

describe( 'Rotate List', () => {
    it( '[1,2,3,4,5], 2', () => {
        const head = ListNode.of( [1, 2, 3, 4, 5] );
        const output = ListNode.toArray( rotateRight( head, 2 ) );
        expect( output ).toStrictEqual( [4, 5, 1, 2, 3] );
    } );

    it( '[0,1,2], 4', () => {
        const head = ListNode.of( [0, 1, 2] );
        const output = ListNode.toArray( rotateRight( head, 4 ) );
        expect( output ).toStrictEqual( [2, 0, 1] );
    } );

    it( '[1], 4', () => {
        const head = ListNode.of( [1] );
        const output = ListNode.toArray( rotateRight( head, 4 ) );
        expect( output ).toStrictEqual( [1] );
    } );
} );
