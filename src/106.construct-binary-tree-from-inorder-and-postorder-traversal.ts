/*
 * @lc app=leetcode id=106 lang=typescript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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

export function buildTree( inorder: number[], postorder: number[] ): TreeNode | null {

  if( !inorder?.length ) return null;

  const val = postorder.pop();
  let i = 0;
  while( inorder[i] !== val ) i++;

  const left = buildTree( inorder.splice( 0,i ), postorder.splice( 0,i ) );
  const right = buildTree( inorder.splice( 1 ), postorder );
  return new TreeNode( val, left, right );
}
// @lc code=end

