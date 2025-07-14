import { ListNode } from '@/dataStructure/ListNode';

function getDecimalValue( head: ListNode | null ): number {
    let decimal = 0;
    while ( head ) {
        decimal = decimal * 2 + head.val;
        head = head.next;
    }
    return decimal;
}

describe( '1290.convert-binary-number-in-a-linked-list-to-integer', () => {
    it( 'case 1', () => {
        const input = ListNode.of( [1, 0, 1] );
        expect( getDecimalValue( input ) ).toBe( 5 );
    } );

    it( 'case 2', () => {
        const input = ListNode.of( [0] );
        expect( getDecimalValue( input ) ).toBe( 0 );
    } );
} );
