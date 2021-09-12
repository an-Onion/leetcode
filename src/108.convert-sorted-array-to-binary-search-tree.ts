/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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

export function sortedArrayToBST( nums: number[] ): TreeNode | null {

  if( !nums?.length ) return null;

  const pivot = nums.length  >> 1;
  const left = sortedArrayToBST( nums.splice( 0, pivot ) );
  const val = nums.shift();
  const right = sortedArrayToBST( nums );

  return new TreeNode( val, left, right );

}
// @lc code=end

