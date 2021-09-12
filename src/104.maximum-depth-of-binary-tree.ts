/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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
import { TreeNode } from './dataStructure/TreeNode';

export function maxDepth( root: TreeNode | null ): number {

  return DFS( root, ( depth ) => depth );

  function DFS( node: TreeNode | null, next: ( depth: number ) => number ): number {
    if( !node ) return next( 0 );
    return DFS( node.left, ( leftDepth ) => {
      return DFS( node.right, ( rightDepth ) => {
        return next( Math.max( leftDepth, rightDepth ) + 1 );
      } );
    } );
  }
}
// @lc code=end

