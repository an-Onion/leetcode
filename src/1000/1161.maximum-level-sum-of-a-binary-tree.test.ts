import { TreeNode } from '@/dataStructure/TreeNode';
import { Queue } from '@datastructures-js/queue';

function maxLevelSum( root: TreeNode | null ): number {
    const Q = new Queue<TreeNode>();
    Q.enqueue( root );
    let maxSum = -Infinity,
        ret = 0,
        level = 0;

    while ( Q.size() ) {
        level++;
        let size = Q.size();
        let sum = 0;

        while ( size-- ) {
            const top = Q.dequeue();
            sum += top.val;
            if ( top.left ) Q.enqueue( top.left );
            if ( top.right ) Q.enqueue( top.right );
        }

        if ( sum > maxSum ) {
            maxSum = sum;
            ret = level;
        }
    }

    return ret;
}

describe( '1161. Maximum Level Sum of a Binary Tree', () => {
    it( 'case 1', () => {
        const root = TreeNode.of( [1, 7, 0, 7, -8, null, null] );
        expect( maxLevelSum( root ) ).toBe( 2 );
    } );

    it( 'case 2', () => {
        const root = TreeNode.of( [
            989,
            null,
            10250,
            98693,
            -89388,
            null,
            null,
            null,
            -32127,
        ] );
        expect( maxLevelSum( root ) ).toBe( 2 );
    } );
} );
