/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {

  return DFS(preorder, inorder);

  function DFS(preO: number[], inO: number[]): TreeNode | null {

    if(!preO?.length) return null;

    const val = preO[0];

    let i = 0;

    while(inO[i] !== val) i++;

    const left = DFS(preO.splice(1, i), inO.splice(0, i));
    const right = DFS(preO.splice(1), inO.splice(1));
    return new TreeNode(val, left, right);
  }

}
// @lc code=end

