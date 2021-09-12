/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
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

export function isSubtree( s: TreeNode | null, t: TreeNode | null ): boolean {

  type TreeVal = string | number;

  function preOrder( tree: TreeNode, array: TreeVal [] = [''] ): TreeVal [] {
    array.push( tree.val );
    if( !tree.left ) {
      array.push( 'l' );
    } else {
      preOrder( tree.left, array );
    }

    if( !tree.right ) {
      array.push( 'r' );
    } else {
      preOrder( tree.right, array );
    }
    return array;
  }

  const preS = preOrder( s, [''] ).join( '#' );
  const preT = preOrder( t, [''] ).join( '#' );

  return preS.includes( preT );
}
// @lc code=end

