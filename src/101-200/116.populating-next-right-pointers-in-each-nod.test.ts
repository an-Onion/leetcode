
export class Node {
    val: number;
    left: Node | null;
    right: Node | null;
    next: Node | null;
    constructor( val?: number, left?: Node, right?: Node, next?: Node ) {
        this.val = ( val === undefined ? 0 : val );
        this.left = ( left === undefined ? null : left );
        this.right = ( right === undefined ? null : right );
        this.next = ( next === undefined ? null : next );
    }
}


function connect( root: Node | null ): Node | null {
    if ( !root ) return null;

    const Q: Node[] = [root];

    while ( Q.length ) {

        let size = Q.length;
        let prev: Node | null = null;

        while ( size-- ) {
            const node = Q.shift();

            prev && ( prev.next = node );

            prev = node;

            node.left && Q.push( node.left );

            node.right && Q.push( node.right );
        }
    }

    return root;
}

describe( '116. Populating Next Right Pointers in Each Node', () => {
    it( 'should return the correct result', () => {
        // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
        const root = new Node( 1, new Node( 2, new Node( 4 ), new Node( 5 ) ), new Node( 3, new Node( 6 ), new Node( 7 ) ) );
        const result = connect( root );

        expect( result ).toEqual( root );
    } );
} );