import { TreeNode } from '../dataStructure/TreeNode';

function rob( root: TreeNode | null ): number {
    function DFS( node: TreeNode | null ): [number, number] {
        if ( !node ) return [0, 0];
        const [leftRob, leftNotRob] = DFS( node.left );
        const [rightRob, rightNotRob] = DFS( node.right );
        const rob = node.val + leftNotRob + rightNotRob;
        const notRob =
            Math.max( leftRob, leftNotRob ) + Math.max( rightRob, rightNotRob );
        return [rob, notRob];
    }
    return Math.max( ...DFS( root ) );
}


describe( '337.house-robber-iii', () => {
    it( '[3,2,3,null,3,null,1]', () => {
        const root = TreeNode.of( [3,2,3,null,3,null,1] );
        expect( rob( root ) ).toEqual( 7 );
    } );

    it( '[3,4,5,1,3,null,1]', () => {
        // [3,4,5,1,3,null,1]
        const root = TreeNode.of( [3,4,5,1,3,null,1] );
        expect( rob( root ) ).toEqual( 9 );
    } );
} );