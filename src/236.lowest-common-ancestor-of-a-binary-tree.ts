/*
 * @lc app=leetcode id=236 lang=typescript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  function dfs(node: TreeNode): TreeNode | null {
    if( !node || node.val === p.val || node.val === q.val ) return node;

    const left = dfs(node.left);
    const right = dfs(node.right);

    return (left && right) ? node : (left || right);
  }

  return dfs(root);
}
// @lc code=end

