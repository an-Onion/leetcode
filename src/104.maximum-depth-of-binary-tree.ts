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

export function maxDepth(root: TreeNode | null): number {

  if(!root) return 0;

  const queue = [root];
  let count = 1, res = 0;

  while(queue.length) {

    const node = queue.shift();

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);

    if(--count) continue;

    count = queue.length;
    res++;
  }
  return res;
}
// @lc code=end

