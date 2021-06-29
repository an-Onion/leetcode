/*
 * @lc app=leetcode id=700 lang=typescript
 *
 * [700] Search in a Binary Search Tree
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

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {

  let node = root;

  while(node) {
    if( node.val === val ) return node;
    else if( node.val < val ) node = node.right;
    else node = node.left;
  }

  return null;
}
// @lc code=end

