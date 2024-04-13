export class Node {
    val: number;
    next: Node | null;
    random: Node | null;
    constructor( val?: number, next?: Node, random?: Node ) {
        this.val = ( val === undefined ? 0 : val );
        this.next = ( next === undefined ? null : next );
        this.random = ( random === undefined ? null : random );
    }
}

function copyRandomList( head: Node | null ): Node | null {

    let p = head;

    while ( p ) {
        const node = new Node( p.val, p.next );
        const prev = p;
        p = p.next;
        prev.next = node;
    }

    let origin = head;

    while( origin ){
        const copy = origin.next;
        if( origin.random ){
            copy.random = origin.random.next;
        }
        origin = copy.next;
    }
    const dummy = new Node( -1, head?.next ?? null );
    origin = head;

    while( origin ){
        const prev = origin;
        const copy = origin.next;
        origin = copy.next;
        prev.next = origin;
        copy.next =  origin?.next ?? null;
    }
    return dummy.next;
}

describe( '138.copy-list-with-random-pointer', () => {

    it( '[]', () => {
        const copy = copyRandomList( null );
        expect( copy ).toBe( null );    
    } );

    it( '[[7,null],[13,0]', () => {
        const tail = new Node( 13 );
        const head = new Node( 7, tail );
        tail.random = head;

        const copy = copyRandomList( head );
        expect( copy.val ).toBe( 7 );
        expect( copy.next.val ).toBe( 13 );
        expect( copy.next.random.val ).toBe( 7 );
    } );
} );