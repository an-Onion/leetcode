import { TreeNode } from '@/dataStructure/TreeNode';

function balanceBST( root: TreeNode | null ): TreeNode | null {
    return buildBST( inorderTraversal( root ) );

    function inorderTraversal( root: TreeNode | null ): number[] {
        if ( !root ) return [];
        return [
            ...inorderTraversal( root.left ),
            root.val,
            ...inorderTraversal( root.right ),
        ];
    }

    function buildBST( nums: number[] ): TreeNode | null {
        if ( nums.length === 0 ) return null;
        const mid = Math.floor( nums.length / 2 );
        const root = new TreeNode( nums[mid] );
        root.left = buildBST( nums.slice( 0, mid ) );
        root.right = buildBST( nums.slice( mid + 1 ) );
        return root;
    }
}

describe( '1382. balance-a-binary-search-tree', () => {
    it( 'case 1', () => {
        const root = TreeNode.of( [1, null, 2, null, 3, null, 4, null, null] );
        const output = balanceBST( root );
        expect( TreeNode.toArray( output ) ).toStrictEqual( [3, 2, 4, 1] );
    } );

    it( 'case 2', () => {
        const root = TreeNode.of( [2, 1, 3] );
        const output = balanceBST( root );
        expect( TreeNode.toArray( output ) ).toStrictEqual( [2, 1, 3] );
    } );
} );
