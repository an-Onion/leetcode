import { ListNode } from '../dataStructure/ListNode';

function getIntersectionNode( headA: ListNode | null, headB: ListNode | null ): ListNode | null {

    let nodeA = headA, nodeB = headB;
    while( nodeA !== nodeB ){
        nodeA = !nodeA ? headB : nodeA.next;
        nodeB = !nodeB ? headA : nodeB.next;
    }
    return nodeA;
}

describe( '160.intersection-of-two-linked-lists', () => {

    it( 'listA = [4,8,4,5], listB = [1,8,4,5]', () =>{
        const common = ListNode.of( [8,4,5] );
        const listA = new ListNode( 4, common ), listB = new ListNode( 1, common );
        expect( getIntersectionNode( listA, listB ).val ).toEqual( 8 );
    } );

    it( 'listA = [1,9,1], listB = [3,2,4]', () =>{
        const listA = ListNode.of( [1,9,1] ), listB = ListNode.of( [3,2,4] );
        expect( getIntersectionNode( listA, listB ) ).toBeNull();
    } );

} );

