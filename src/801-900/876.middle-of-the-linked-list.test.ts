import { ListNode } from '../dataStructure/ListNode';

function middleNode( head: ListNode | null ): ListNode | null {
    let slow = head,
        fast = head.next;

    while ( fast ) {
        slow = slow.next;
        fast = fast?.next?.next;
    }
    return slow;
}

describe( '876.middle-of-the-linked-list', () => {
    it( 'case 1', () => {
        const head = ListNode.of( [1, 2, 3, 4, 5] );
        const middle = middleNode( head );
        expect( middle.val ).toEqual( 3 );
    } );

    it( 'case 2', () => {
        const head = ListNode.of( [1, 2, 3, 4, 5, 6] );
        const middle = middleNode( head );
        expect( middle.val ).toEqual( 4 );
    } );

    it( 'case 3', () => {
        const head = ListNode.of( [1, 2] );
        const middle = middleNode( head );
        expect( middle.val ).toEqual( 2 );
    } );
} );
