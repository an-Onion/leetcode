import { ListNode } from '../dataStructure/ListNode';

class Solution {
    head: ListNode | null;
    constructor( head: ListNode | null ) {
        this.head = head;
    }
    getRandom(): number {
        let i = 1,
            ans = 0;
        for ( let node = this.head; node; node = node.next ) {
            const rand = Math.floor( Math.random() * i );

            if ( !rand ) ans = node.val;
            i++;
        }
        return ans;
    }
}


describe( '382. Linked List Random Node', () => {
    it( 'should return random node value', () => {
        const head = new ListNode( 1 );
        expect( new Solution( head ).getRandom() ).toBe( 1 );
    } );
} );