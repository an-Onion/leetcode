/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

export function inorderTraversal( root: TreeNode | null ): number[] {

  function DFS( node: TreeNode | null, cb: ( params: number[] ) => number[] ): number[] {
  
    if( !node ) return cb( [] );

    return DFS( node.left, ( left ) =>{
      return DFS( node.right, ( right ) =>{
        return cb( [...left, node.val, ...right] );
      } );
    } );
    
  }

  return DFS( root, ( ret ) => ( ret ) );
}
// @lc code=end

