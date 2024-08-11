/*
 * @lc app=leetcode id=1022 lang=typescript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from '../dataStructure/TreeNode';

export function sumRootToLeaf( root: TreeNode | null ): number {
    return DFS( root, 0, ( ret ) => ret );

    function DFS(
        node: TreeNode | null,
        sum: number,
        next: ( val: number ) => number,
    ): number {
        if ( !node ) return next( 0 );
        sum = ( sum << 1 ) | node.val;
        if ( node.left === node.right ) return next( sum );

        return DFS( node.left, sum, ( left ) =>
            DFS( node.right, sum, ( right ) => next( left + right ) ),
        );
    }
}
// @lc code=end
