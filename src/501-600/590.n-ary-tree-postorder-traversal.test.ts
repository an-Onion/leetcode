import { _Node } from './NTreeNode';

function postorder( root: _Node | null ): number[] {
    if ( !root ) return [];
    const stack = [root];
    const ret = [];

    while ( stack.length ) {
        const node = stack.pop();
        ret.push( node.val );
        for ( const child of node.children ) {
            stack.push( child );
        }
    }
    return ret.reverse();
}

describe( '590.n-ary-tree-postorder-traversal', () => {
    it( 'case 1', () => {
        const root = new _Node( 1, [
            new _Node( 3, [new _Node( 5 ), new _Node( 6 )] ),
            new _Node( 2 ),
            new _Node( 4 ),
        ] );
        expect( postorder( root ) ).toEqual( [5, 6, 3, 2, 4, 1] );
    } );

    it( 'case 2', () => {
        const root = new _Node( 1, [
            new _Node( 2 ),
            new _Node( 3, [
                new _Node( 6 ),
                new _Node( 7, [new _Node( 11, [new _Node( 14 )] )] ),
            ] ),
            new _Node( 4, [new _Node( 8, [new _Node( 12 )] )] ),
            new _Node( 5, [new _Node( 9, [new _Node( 13 )] ), new _Node( 10 )] ),
        ] );
        expect( postorder( root ) ).toEqual( [
            2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1,
        ] );
    } );
} );
