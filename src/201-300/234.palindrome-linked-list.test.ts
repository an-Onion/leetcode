import { ListNode } from '../dataStructure/ListNode';

function isPalindrome( head: ListNode | null ): boolean {
    const dummy = new ListNode( 0, head );
    let fast = dummy, slow = dummy;

    while( fast && fast.next ) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let second = reverse( slow );
    slow.next  = null;
    let first = dummy.next;

    while( second ) {
        if( first.val !== second.val ) {
            return false;
        }
        first = first.next;
        second = second.next;
    }

    return true;


    function reverse( node: ListNode | null ): ListNode | null {
        const pre = node;
        let cur = node.next;
        pre.next = null;

        while( cur ) {
            const next = cur.next;
            cur.next = pre.next;
            pre.next = cur;
            cur = next;
        }

        return pre.next;
    }
}

describe( '234.palindrome-linked-list', () => {

    it( '[1,2,2,1]', () => {
        // slow = 2
        const list = ListNode.of( [1,2,2,1] );
        expect( isPalindrome( list ) ).toBeTruthy();
    } );

    it( '[1,2,3,2,1]', () => {
        // slow = 3
        const list = ListNode.of( [1,2,3,2,1] );
        expect( isPalindrome( list ) ).toBeTruthy();
    } );

    it( '[1,2]', () => {
        // slow = 1
        const list = ListNode.of( [1,2] );
        expect( isPalindrome( list ) ).toBeFalsy();
    } );

} );

