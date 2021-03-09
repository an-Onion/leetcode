/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

export function levelOrder(root: TreeNode | null): number[][] {

  if( !root ) return [];

  const queue: (TreeNode | null)[] = [];

  queue.push(root);
  const ret = [];
  let count = 1, cur = [];

  while(queue.length) {

    const node = queue.shift();
    cur.push(node.val);

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);

    if( --count ) continue;

    ret.push(cur);
    cur = [];
    count = queue.length;
  }

  return ret;
}
// @lc code=end

