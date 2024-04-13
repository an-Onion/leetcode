/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

export function isValidBST( root: TreeNode | null ): boolean {

  type Props = {node: TreeNode | null, min: number, max: number}
  type NextFun = ( pre: boolean ) => boolean

  function DFS( { node, min, max }: Props, next: NextFun ): boolean{
    if( !node ) return next( true );
    if( node.val <= min || node.val >= max ) return next( false );
    return DFS( { node: node.left, min, max: node.val }, ( left ) => {
      return DFS( { node: node.right, min: node.val, max }, ( right ) => next( left && right ) );
    } );
  }

  return DFS( { node: root, min: -Infinity, max: Infinity }, ( pre ) => pre );
}
// @lc code=end

