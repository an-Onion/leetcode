/*
 * @lc app=leetcode id=236 lang=typescript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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

export function lowestCommonAncestor( root: TreeNode | null, p: TreeNode | null, q: TreeNode | null ): TreeNode | null {

  function DFS( node: TreeNode | null, cb: ( node: TreeNode | null ) => TreeNode | null ) {

    if( !node || node === p || node === q ) return cb( node );

    return DFS( node.left, ( left ) => {
      return DFS( node.right, ( right ) => {
        if( left && right ) return cb( node );
        return cb( left || right );
      } );
    } );
    
  }
  return DFS( root, ( node ) => node );
}
// @lc code=end

