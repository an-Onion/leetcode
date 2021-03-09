/*
 * @lc app=leetcode id=103 lang=typescript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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

export function zigzagLevelOrder(root: TreeNode | null): number[][] {

  if( !root ) return [];

  const queue: (TreeNode | null)[] = [];

  queue.push(root);
  const ret = [];
  let count = 1, cur = [], zigzag = true;

  while(queue.length) {

    const node = queue.shift();
    cur.push(node.val);

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);

    if( --count ) continue;

    zigzag ? ret.push(cur) : ret.push(cur.reverse());

    zigzag = !zigzag;

    cur = [];
    count = queue.length;
  }

  return ret;

}
// @lc code=end

