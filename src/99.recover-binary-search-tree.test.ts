import { TreeNode } from './dataStructure/TreeNode';

function recoverTree( root: TreeNode | null ): void {

    let pre: TreeNode | null = null;
    let s1: TreeNode | null = null;
    let s2: TreeNode | null = null;

    function DFS( node: TreeNode | null ): void {
        if( !node ) return;

        DFS( node.left );
        
        if( pre?.val > node.val ){
            if( !s1 ) s1 = pre;
            s2 = node;
        }
        pre=node;
        DFS( node.right );
    }
    DFS( root );
    [s1.val, s2.val] = [s2.val, s1.val];
}


describe( '99. recoverTree', () => {

    it( '[1, 3, null, null, 2]', () => {
        // Arrange
        const root = TreeNode.of( [1, 3, null, null, 2] );
        // Act
        recoverTree( root );
        // Assert
        const out = TreeNode.toArray( root );

        expect( out ).toEqual( [3, 1, null, null, 2] );
    } );

    it( '[3, 1, 4, null, null, 2]', () => {
        // Arrange
        const root = TreeNode.of( [3, 1, 4, null, null, 2] );
        // Act
        recoverTree( root );
        // Assert
        const out = TreeNode.toArray( root );

        expect( out ).toEqual( [2, 1, 4, null, null, 3] );
    } );

    it( '[2 , 3, 1]', () => {
        // Arrange
        const root = TreeNode.of( [2, 3, 1] );
        // Act
        recoverTree( root );
        // Assert
        const out = TreeNode.toArray( root );
        expect( out ).toEqual( [2, 1, 3] );
    } );

} );