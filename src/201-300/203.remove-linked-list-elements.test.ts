import { ListNode } from '../dataStructure/ListNode';

function removeElements( head: ListNode | null, val: number ): ListNode | null {

    const dummy = new ListNode( 0 , head );

    let pre = dummy;

    while( pre.next ){
        const next = pre.next;
        if( next.val === val ){
            pre.next = next.next;
            continue;
        }
        pre = pre.next;
    }
    return dummy.next;
}

describe( '203. remove-linked-list-elements', () => {
    it( 'head = [1,2,6,3,4,5,6], val = 6', () => {
        const head = ListNode.of( [1, 2, 6, 3, 4, 5, 6] );
        const output = removeElements( head, 6 );
        expect( ListNode.toArray( output ) ).toStrictEqual( [1, 2, 3, 4, 5] );
    } );

    it( 'head = [7,7,7,7], val = 7', () => {
        const head = ListNode.of( [7, 7, 7, 7] );
        const output = removeElements( head, 7 );
        expect( ListNode.toArray( output ) ).toStrictEqual( [] );
    } );


    it( 'head = [], val = 1', () => {
        const head = ListNode.of( [] );
        const output = removeElements( head, 1 );
        expect( ListNode.toArray( output ) ).toStrictEqual( [] );
    } );

} );