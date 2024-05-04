import { ListNode } from '../dataStructure/ListNode';

function sortList( head: ListNode | null ): ListNode | null {

    return mergeSort( head );

    function mergeSort( head: ListNode | null ): ListNode | null {

        if( !head || !head.next ) return head;

        const dummy = new ListNode( -1, head );
        let slow = dummy, fast = dummy;

        while( fast && fast.next ){
            slow = slow.next;
            fast = fast.next.next;
        }

        const next = slow.next;
        slow.next = null;

       const left = mergeSort( head );
       const right = mergeSort( next );
       return merge( left,right );
    }

    function merge( left: ListNode | null, right: ListNode | null ){
        const dummy = new ListNode( -1, left );
        let prev = dummy;
        while( left && right ){
            if( left.val  < right.val ){
                prev.next = left;
                left = left.next;
                prev = prev.next;
                continue;
            }
            prev.next = right;
            right = right.next;
            prev = prev.next;
        }
        prev.next = left || right;
        return dummy.next;
    }
}

describe( '148. sort-list', () => {
    it( '[4,2,1,3]', () => {
        const head = ListNode.of( [4,2,1,3] );
        const output = sortList( head );
        expect( ListNode.toArray( output ) ).toStrictEqual( [1,2,3,4]  );
    } );

    it( '[-1,5,3,4,0]', () => {
        const head = ListNode.of( [-1,5,3,4,0] );
        const output = sortList( head );
        expect( ListNode.toArray( output ) ).toStrictEqual( [-1,0,3,4,5]  );
    } );

    it( '[]', () => {
        const head = ListNode.of( [] );
        const output = sortList( head );
        expect( output ).toBeNull();
    } );
} );