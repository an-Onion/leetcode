/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

export function inorderTraversal(root: TreeNode | null): number[] {

  const res = [];
  DFS(root);
  return res;

  function DFS(node: TreeNode | null): void {
    if( !node ) return;
    DFS(node.left);
    res.push(node.val);
    DFS(node.right);
  }

}
// @lc code=end

