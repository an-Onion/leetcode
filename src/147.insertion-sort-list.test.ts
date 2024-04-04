import { ListNode } from './dataStructure/ListNode';

function insertionSortList( head: ListNode | null ): ListNode | null {
    const dummy = new ListNode( 0 );

    while( head ) {
        let prev = dummy, curr = dummy.next;
        while( curr?.val < head.val ) {
            prev = curr;
            curr = curr.next;
        }
        const node = head;
        head = head.next;
        node.next = curr;
        prev.next = node;
    }
    return dummy.next;
}

describe( '147. insertion sort list', () => {
    
    it( '[4,2,1,3]', () =>{
        const head = ListNode.of( [4,2,1,3] );
        const output = insertionSortList( head );
        expect( ListNode.toArray( output ) ).toStrictEqual( [1,2,3,4] );
    } );

    it( '[-1,5,3,4,0]', () =>{
        const head = ListNode.of( [-1,5,3,4,0] );
        const output = insertionSortList( head );
        expect( ListNode.toArray( output ) ).toStrictEqual( [-1,0,3,4,5] );
    } );

} );