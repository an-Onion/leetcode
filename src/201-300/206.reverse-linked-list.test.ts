import { ListNode } from '../dataStructure/ListNode';

function reverseList( head: ListNode | null ): ListNode | null {
    const dummy = new ListNode( -1 );

    while( head ){
        const node = head;
        head = head.next;
        node.next = dummy.next;
        dummy.next = node;
    }
    return dummy.next;
}

describe( '206. reverse linked list', ()=>{
    it( '[1,2,3,4,5]', () => {
        const head = ListNode.of( [1,2,3,4,5] );
        const output = reverseList( head );
        expect( ListNode.toArray( output ) ).toStrictEqual( [5,4,3,2,1] );
    } );

    it( '[1,2]', () => {
        const head = ListNode.of( [1,2] );
        const output = reverseList( head );
        expect( ListNode.toArray( output ) ).toStrictEqual( [2,1] );
    } );

    it( '[]', () => {
        const head = ListNode.of( [] );
        const output = reverseList( head );
        expect( ListNode.toArray( output ) ).toStrictEqual( [] );
    } );
} );