/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

export function isBalanced(root: TreeNode | null): boolean {

  return DFS(root, (isValid: boolean) => isValid);

  type nextFuc = (isValid: boolean, depth: number) => boolean;

  function DFS(node: TreeNode | null, next: nextFuc): boolean {
    if( !node ) return next(true, 0);

    return DFS(node.left, ( isL, lD ) => {
      if(!isL) return next(false, 0);

      return DFS(node.right, ( isR, rD ) => {
        if(!isR ) return next(false, 0);

        if( Math.abs(lD-rD) > 1) return next(false, 0);

        const depth = Math.max(lD, rD) + 1;
        return next(true, depth);
      });
    });
  }
}
// @lc code=end

