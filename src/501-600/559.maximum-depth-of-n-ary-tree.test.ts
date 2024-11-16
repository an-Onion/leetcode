export class _Node {
    val: number;
    children: _Node[];

    constructor( val?: number, children?: _Node[] ) {
        this.val = val === undefined ? 0 : val;
        this.children = children === undefined ? [] : children;
    }
}

function maxDepth( root: _Node | null ): number {
    if ( !root ) return 0;

    const Q = [root];
    let depth = 0;

    while ( Q.length ) {
        let size = Q.length;
        while ( size-- ) {
            const node = Q.shift()!;
            for ( const child of node.children ) {
                if ( !child ) continue;
                Q.push( child );
            }
        }
        depth++;
    }
    return depth;
}

describe( '559.maximum-depth-of-n-ary-tree', () => {
    it( 'case 1', () => {
        // root = [1,null,3,2,4,null,5,6]
        const root = new _Node( 1, [
            new _Node( 3, [new _Node( 5 ), new _Node( 6 )] ),
            new _Node( 2 ),
            new _Node( 4 ),
        ] );
        expect( maxDepth( root ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        // root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
        const root = new _Node( 1, [
            new _Node( 2 ),
            new _Node( 3, [
                new _Node( 6 ),
                new _Node( 7, [new _Node( 11, [new _Node( 14 )] )] ),
            ] ),
            new _Node( 4, [new _Node( 8, [new _Node( 12 )] )] ),
            new _Node( 5, [new _Node( 9, [new _Node( 13 )] ), new _Node( 10 )] ),
        ] );
        expect( maxDepth( root ) ).toBe( 5 );
    } );
} );
