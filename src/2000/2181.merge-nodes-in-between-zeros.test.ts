import { ListNode } from '../dataStructure/ListNode';

function mergeNodes( head: ListNode | null ): ListNode | null {
    const dummy = new ListNode( 0 );
    let p = head.next,
        q = dummy;

    while ( p ) {
        q.next = new ListNode( 0 );
        q = q.next;
        while ( p.val !== 0 ) {
            q.val += p.val;
            p = p.next;
        }
        p = p.next;
    }
    return dummy.next;
}

describe( '2181. Merge Nodes in Between Zeros', () => {
    it( 'e.g. 1', () => {
        const head = ListNode.of( [0, 3, 1, 0, 4, 5, 2, 0] );
        const output = mergeNodes( head );
        expect( output.toArray() ).toStrictEqual( [4, 11] );
    } );
    it( 'e.g. 2', () => {
        const head = ListNode.of( [0, 1, 0, 3, 0, 2, 2, 0] );
        const output = mergeNodes( head );
        expect( output.toArray() ).toStrictEqual( [1, 3, 4] );
    } );
} );
