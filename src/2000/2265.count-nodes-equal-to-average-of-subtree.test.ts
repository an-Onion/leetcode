import { TreeNode } from '../dataStructure/TreeNode';

function averageOfSubtree( root: TreeNode | null ): number {
    let ans = 0;

    dfs( root );
    return ans;

    function dfs( node: TreeNode | null ): [number, number] {
        if ( node === null ) {
            return [0, 0];
        }
        const [leftSum, leftSize] = dfs( node.left );
        const [rightSum, rightSize] = dfs( node.right );
        const Size = leftSize + rightSize + 1;
        const Sum = leftSum + rightSum + node.val;
        if ( Size > 0 && Math.floor( Sum / Size ) === node.val ) {
            ans++;
        }
        return [Sum, Size];
    }
}

describe( '2265.count-nodes-equal-to-average-of-subtree', () => {
    it( 'case 1', () => {
        const root = TreeNode.of( [4, 8, 5, 0, 1, null, 6] );
        expect( averageOfSubtree( root ) ).toBe( 5 );
    } );

    it( 'case 2', () => {
        const root = TreeNode.of( [1] );
        expect( averageOfSubtree( root ) ).toBe( 1 );
    } );
} );
