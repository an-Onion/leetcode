import { TreeNode } from '../dataStructure/TreeNode';

class BSTIterator {

    stack: TreeNode[];
    current: TreeNode | null;

    constructor( root: TreeNode | null ) {
        this.stack = [];
        this.current = this.init( root );
    }

    init( node: TreeNode ) {
        while( node.left ) {
            this.stack.push( node );
            node = node.left;
        }
        return node;
    }

    next(): number {
        const node = this.current;
        if( node.right ){
            this.current = this.init( node.right );
            return node.val;
        } 
        this.current = this.stack.pop();

        return node.val;
    }

    hasNext(): boolean {
        return !!this.current;
    }
}

describe( '173. binary-search-tree-iterator', () => {
    it( '[7,3,15,null,null,9,20]', () => {
        const root = TreeNode.of( [7,3,15,null,null,9,20] );
        const iterator = new BSTIterator( root );
        expect( iterator.next() ).toBe( 3 );
        expect( iterator.next() ).toBe( 7 );
        expect( iterator.hasNext() ).toBe( true );
        expect( iterator.next() ).toBe( 9 );
        expect( iterator.hasNext() ).toBe( true );
        expect( iterator.next() ).toBe( 15 );
        expect( iterator.hasNext() ).toBe( true );
        expect( iterator.next() ).toBe( 20 );
        expect( iterator.hasNext() ).toBe( false );
    } );
} );