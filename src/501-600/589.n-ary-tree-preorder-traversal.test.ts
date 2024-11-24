import { _Node } from './NTreeNode';

function preorder( root: _Node | null ): number[] {
    if ( !root ) return [];
    const Q = [root];
    const ret: number[] = [];
    while ( Q.length ) {
        const node = Q.pop();
        ret.push( node!.val );
        for ( let i = node!.children.length - 1; i >= 0; i-- ) {
            Q.push( node!.children[i] );
        }
    }

    return ret;
}

describe( '589.n-ary-tree-preorder-traversal', () => {
    it( 'case 1', () => {
        const root = new _Node( 1, [
            new _Node( 3, [new _Node( 5 ), new _Node( 6 )] ),
            new _Node( 2 ),
            new _Node( 4 ),
        ] );
        expect( preorder( root ) ).toEqual( [1, 3, 5, 6, 2, 4] );
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
        expect( preorder( root ) ).toEqual( [
            1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10,
        ] );
    } );
} );
