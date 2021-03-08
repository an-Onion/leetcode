/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

  return DFS(p, q);

  function DFS(p: TreeNode | null, q: TreeNode | null): boolean {

    if( p === q ) return true;

    if( p?.val !== q?.val ) return false;

    return DFS(p.left, q.left) && DFS(p.right, q.right);
  }

}
// @lc code=end

