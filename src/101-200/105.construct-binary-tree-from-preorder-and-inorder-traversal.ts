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

import { TreeNode } from '../dataStructure/TreeNode';

export function buildTree( preorder: number[], inorder: number[] ): TreeNode | null {

  function DFS( preOrder: number[], inOrder: number[], next: ( ret:TreeNode | null ) => TreeNode | null ): TreeNode | null {

    if ( !preOrder.length ) return next( null );

    const val = preOrder.shift();

    const idx = inOrder.indexOf( val );

    const preLeft = preOrder.splice( 0, idx );
    const inLeft = inOrder.splice( 0, idx );
    inOrder.shift();

    return DFS( preLeft, inLeft, ( left ) => {
      return DFS( preOrder, inOrder, ( right ) => {
        return next( new TreeNode( val, left, right ) );
      } );
    } );
  }

  return DFS( preorder, inorder, ( ret ) => ret );
}
// @lc code=end

