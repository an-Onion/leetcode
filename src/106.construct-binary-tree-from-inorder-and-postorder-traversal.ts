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

  type NextFunc = ( ret: TreeNode | null ) => TreeNode | null

  function DFS( inOrder: number[], postOrder: number[], next: NextFunc ): TreeNode | null{
    if( !postOrder.length ) return next( null );
    const val = postOrder.pop();
    const idx = inOrder.indexOf( val );
    const postLeft = postOrder.splice( 0, idx );
    const inLeft = inOrder.splice( 0, idx );
    inOrder.shift();
    return DFS( inLeft, postLeft, ( left ) => {
      return DFS( inOrder, postOrder, ( right ) => {
        return next( new TreeNode( val, left, right ) );
      } );
    } );
  }

  return DFS( inorder, postorder, ( ret ) => ret );
}
// @lc code=end

