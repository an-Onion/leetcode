/*
 * @lc app=leetcode id=114 lang=typescript
 *
 * [114] Flatten Binary Tree to Linked List
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

/**
 Do not return anything, modify root in-place instead.
 */
import { TreeNode } from '../dataStructure/TreeNode';

export function flatten( root: TreeNode | null ): void {

  while( root ){

    if( root.left ){
      let right = root.left;
      while( right.right ){
        right = right.right;
      }
      right.right = root.right;
      root.right = root.left;
      root.left = null;
    }

    root = root.right;
  }
}
// @lc code=end

