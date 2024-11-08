export class _Node {
    val: number;
    prev: _Node | null;
    next: _Node | null;
    child: _Node | null;

    constructor( val?: number, prev?: _Node, next?: _Node, child?: _Node ) {
        this.val = val === undefined ? 0 : val;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
        this.child = child === undefined ? null : child;
    }
}

function flatten( head: _Node | null ): _Node | null {
    DFS( head );
    return head;

    function DFS( node: _Node ) {
        let curr = node,
            last = null;
        while ( curr ) {
            const next = curr.next;

            if ( curr.child ) {
                const childLast = DFS( curr.child );
                curr.next = curr.child;
                curr.child.prev = curr;

                if ( next ) {
                    childLast.next = next;
                    next.prev = childLast;
                }

                curr.child = null;
                last = childLast;
            } else {
                last = curr;
            }
            curr = next;
        }

        return last;
    }
}

describe( '430.flatten-a-multilevel-doubly-linked-list', () => {
    it( 'case 1', () => {
        const next = new _Node( 2 );
        const prev = new _Node( 1, null, next, new _Node( 3 ) );
        next.prev = prev;

        const head = flatten( prev );
        expect( head.next.val ).toBe( 3 );
    } );

    it( 'case 2', () => {
        const head = flatten( null );
        expect( head ).toBe( null );
    } );
} );
