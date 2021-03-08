/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

export function isValidBST(root: TreeNode | null): boolean {

  return DFS(root, -Infinity, Infinity);

  function DFS(node: TreeNode | null, low: number, up: number): boolean {

    if( !node ) return true;

    const val = node.val;

    if( val <= low || val >= up ) return false;

    return DFS(node.left, low, val) && DFS(node.right, val, up);

  }
}
// @lc code=end

