import { ListNode } from '../dataStructure/ListNode';

function oddEvenList( head: ListNode | null ): ListNode | null {
    const odd = new ListNode( 0 );
    const even = new ListNode( 0 );
    let oddHead = odd, evenHead = even;
    let idx = 1;
    while( head ){
        if( idx % 2 === 1 ){
            oddHead.next = head;
            oddHead = oddHead.next;
        } else {
            evenHead.next = head;
            evenHead = evenHead.next;
        }
        head = head.next;
        idx++;
    }
    evenHead.next = null;
    oddHead.next = even.next;
    return odd.next;

}

describe( '328. odd-even-linked-list', () => {

    it( '[1,2,3,4,5]', () => {
        const head = ListNode.of( [1, 2, 3, 4, 5] );

        expect( ListNode.toArray( oddEvenList( head ) ) ).toStrictEqual( [1, 3, 5, 2, 4] );
    } );

    it( '[2,1,3,5,6,4,7]', () => {
        const head = ListNode.of( [2, 1, 3, 5, 6, 4, 7] );
        expect( ListNode.toArray( oddEvenList( head ) ) ).toStrictEqual( [2, 3, 6, 7, 1, 5, 4] );
    } );

} );