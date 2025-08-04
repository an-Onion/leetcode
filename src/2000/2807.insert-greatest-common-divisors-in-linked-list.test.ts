import { ListNode } from '@/dataStructure/ListNode';

function insertGreatestCommonDivisors( head: ListNode | null ): ListNode | null {
    const dummy = new ListNode( 0, head );

    while ( head?.next ) {
        const gcdValue = gcd( head.val, head.next.val );
        head.next = new ListNode( gcdValue, head.next );
        head = head.next.next;
    }

    return dummy.next;

    function gcd( a: number, b: number ): number {
        if ( b === 0 ) {
            return a;
        }
        return gcd( b, a % b );
    }
}

describe( '2807. insert-greatest-common-divisors-in-linked-list', () => {
    it( 'case 1', () => {
        const head = ListNode.of( [18, 6, 10, 3] );
        const result = insertGreatestCommonDivisors( head );
        expect( result.toArray() ).toEqual( [18, 6, 6, 2, 10, 1, 3] );
    } );

    it( 'case 2', () => {
        const head = ListNode.of( [7] );
        const result = insertGreatestCommonDivisors( head );
        expect( result.toArray() ).toEqual( [7] );
    } );
} );
