import { ListNode } from '../dataStructure/ListNode';

function deleteNode( node: ListNode | null ): void {
    node.val = node.next.val;
    node.next = node.next.next;
}

describe( '237. delete-node-in-a-linked-list', () => {
    
    it( 'head = [4,5,1,9], node = 5', () => {
        const head = ListNode.of( [4,5,1,9] );
        const node = head.next.next;
        deleteNode( node );
        expect( ListNode.toArray( head ) ).toStrictEqual( [4,5,9] );
    } );

    it( 'head = [4,5,1,9], node = 1', () => {
        const head = ListNode.of( [4,5,1,9] );
        const node = head.next;
        deleteNode( node );
        expect( ListNode.toArray( head ) ).toStrictEqual( [4,1,9] );
    } );

} );