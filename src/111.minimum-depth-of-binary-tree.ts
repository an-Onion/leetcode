/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

export function minDepth(root: TreeNode | null): number {

  if(!root) return 0;

  return DFS(root, (depth) => depth);

  function DFS(node: TreeNode | null, next: (depth: number) => number): number{
    if(!node) return next(Infinity);
    if(!node.left && !node.right) return next(1);

    return DFS(node.left, (left) => {
      return DFS(node.right, (right) => {
        const depth = Math.min(left, right) + 1;
        return next(depth);
      });
    });
  }

}
// @lc code=end

