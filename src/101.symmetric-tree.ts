/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

export function isSymmetric( root: TreeNode | null ): boolean {

  return DFS( root.left, root.right );

  function DFS( left: TreeNode | null, right: TreeNode | null ): boolean {

    if( left === right ) return true;

    if( left?.val !== right?.val ) return false;

    return DFS( left.left, right.right ) &&
           DFS( left.right, right.left );
  }
}
// @lc code=end

