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

  function DFS( node: TreeNode | null, next: ( depth: number ) => number ): number {
    if ( node === null ) return next( 0 );
    
    return DFS( node.left, ( left ) => {
      return DFS( node.right, ( right ) => {
        return next( Math.max( left, right ) + 1 );
      } );
    } );
  }

  return DFS( root, ( depth ) => depth );
}
// @lc code=end

