class _Node {
    val: number;
    children: _Node[];
    constructor( v: number ) {
        this.val = v;
        this.children = [];
    }
}

function levelOrder( root: _Node | null ): number[][] {
    if ( !root ) return [];
    const Q = [root];
    const result = [];

    while ( Q.length ) {
        const level = [];
        const len = Q.length;
        for ( let i = 0; i < len; i++ ) {
            const node = Q.shift();
            if ( !node ) continue;
            level.push( node.val );
            Q.push( ...node.children );
        }
        level.length && result.push( level );
    }
    return result;
}

describe( '429. N-ary Tree Level Order Traversal', () => {
    it( 'should work', () => {
        const root = new _Node( 1 );
        root.children.push( new _Node( 3 ), new _Node( 2 ), new _Node( 4 ) );
        root.children[0].children.push( new _Node( 5 ), new _Node( 6 ) );
        expect( levelOrder( root ) ).toStrictEqual( [[1], [3, 2, 4], [5, 6]] );
    } );
} );
