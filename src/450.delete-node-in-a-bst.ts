/*
 * @lc app=leetcode id=450 lang=typescript
 *
 * [450] Delete Node in a BST
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

export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {

  return DFS(root, (node) => node);

  type nextFunc = (node: TreeNode | null) => TreeNode | null;

  function DFS(node: TreeNode | null, next: nextFunc): TreeNode | null {
    if (!node) return next(null);

    if (node.val > key) {
      return DFS(node.left, (left) => {
        node.left = left;
        return next(node);
      });
    }

    if (node.val < key) {
      return DFS(node.right, (right) => {
        node.right = right;
        return next(node);
      });
    }

    if(!node.left) return next(node.right);
    if(!node.right) return next(node.left);

    const successor = leftRotate(node);

    return next(successor);
  }

  function leftRotate(node: TreeNode): TreeNode {

    let minMoreThan = node.right;
    while( minMoreThan.left )
      minMoreThan = minMoreThan.left;
    minMoreThan.left =  node.left;

    return node.right;
  }
}
// @lc code=end
