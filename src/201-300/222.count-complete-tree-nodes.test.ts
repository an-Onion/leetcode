import { TreeNode } from '../dataStructure/TreeNode';

function countNodes( root: TreeNode | null ): number {
    
    function height( node: TreeNode | null ): number {
        if( !node ) return 0;
        return 1 + height( node.left );
    }

    if( !root ) return 0;

    const left = height( root.left );
    const right = height( root.right );

    if( left === right ) return ( 1 << left ) + countNodes( root.right );
    return ( 1 << right ) + countNodes( root.left );
}

describe( '222. count-complete-tree-nodes', () => {
    it( '[1,2,3,4,5,6]', () => {
        const root = TreeNode.of( [1,2,3,4,5,6] );
        expect( countNodes( root ) ).toBe( 6 );
    } );

    it( '[]', () => {
        expect( countNodes( null ) ).toBe( 0 );
    } );
} );