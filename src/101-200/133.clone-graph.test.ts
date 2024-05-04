export class Node {
    val: number;
    neighbors: Node[];
    constructor( val?: number, neighbors?: Node[] ) {
        this.val = ( val === undefined ? 0 : val );
        this.neighbors = ( neighbors === undefined ? [] : neighbors );
    }
}

function cloneGraph( node: Node | null ): Node | null {

    const visited = new Map<Node, Node>();

    function DFS( node: Node ): Node {

        if( !node ) return null;
        if( visited.has( node ) ) return visited.get( node )!;

        const clone = new Node( node.val );
        visited.set( node, clone );

        for( const neighbor of node.neighbors ) {
            const newNeighbor = DFS( neighbor );
            clone.neighbors.push( newNeighbor );
        }
        return clone;
    }
    return DFS( node );
}

describe( '133. clone graph', () => {

    it( 'should work', () => {
        const node = new Node( 1 );
        node.neighbors = [ new Node( 2 ), new Node( 3 ), new Node( 4 ) ];
        node.neighbors[ 0 ].neighbors = [ new Node( 5 ) ];
        node.neighbors[ 1 ].neighbors = [ new Node( 6 ) ];

        const clone = cloneGraph( node );
        expect( clone ).toEqual( node );
    } );

} );