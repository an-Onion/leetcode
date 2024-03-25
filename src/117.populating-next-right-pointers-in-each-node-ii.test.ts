import { Node } from './116.populating-next-right-pointers-in-each-nod.test';

function connect( root: Node | null ): Node | null {
    if( !root ) return null;

    let head = root;
    const dummy = new Node( 0 );

    while( head ) {
        dummy.next = null;
        let prev = dummy;

        while( head ) {
            if( head.left ) {
                prev.next = head.left;
                prev = prev.next;
            }
            if( head.right ) {
                prev.next = head.right;
                prev = prev.next;
            }
            head = head.next;
        }
        head = dummy.next;
    }
    return root;
}

describe( '116. Populating Next Right Pointers in Each Node', () => {
    it( 'should work', () => {
        const root = new Node( 1 );
        root.left = new Node( 2 );
        root.right = new Node( 3 );
        root.left.left = new Node( 4 );
        root.left.right = new Node( 5 );
        root.right.left = new Node( 6 );
        root.right.right = new Node( 7 );
        connect( root );
        expect( root.left.next ).toBe( root.right );
    } );
} );