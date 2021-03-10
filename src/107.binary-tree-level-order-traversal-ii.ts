/*
 * @lc app=leetcode id=107 lang=typescript
 *
 * [107] Binary Tree Level Order Traversal II
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
import { TreeNode } from '../src/dataStructure/TreeNode';

export function levelOrderBottom(root: TreeNode | null): number[][] {

  if(!root) return [];
  const queue = [root];
  let count = 1, cur = [];
  const res: number[][] = [];

  while( queue.length ){

    const node = queue.shift();

    cur.push(node.val);

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);

    if(--count) continue;

    count = queue.length;
    res.push(cur);
    cur = [];
  }
  return res.reverse();
}
// @lc code=end

