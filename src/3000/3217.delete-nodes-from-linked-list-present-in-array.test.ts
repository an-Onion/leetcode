import { ListNode } from '@/dataStructure/ListNode';

function modifiedList( nums: number[], head: ListNode | null ): ListNode | null {
    const set = new Set( nums );
    const sentry = new ListNode( -1, head );

    let prev = sentry;

    while ( prev.next ) {
        if ( set.has( prev.next.val ) ) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return sentry.next;
}

describe( '3217.delete-nodes-from-linked-list-present-in-array', () => {
    it( 'case 1', () => {
        const nums = [1, 2, 3];
        const head = ListNode.of( [1, 2, 3, 4, 5] );
        const result = modifiedList( nums, head );
        expect( result.toArray() ).toEqual( [4, 5] );
    } );

    it( 'case 2', () => {
        const nums = [1];
        const head = ListNode.of( [1, 2, 1, 2, 1, 2] );
        const result = modifiedList( nums, head );
        expect( result.toArray() ).toEqual( [2, 2, 2] );
    } );

    it( 'case 3', () => {
        const nums = [5];
        const head = ListNode.of( [1, 2, 3, 4] );
        const result = modifiedList( nums, head );
        expect( result.toArray() ).toEqual( [1, 2, 3, 4] );
    } );
} );
