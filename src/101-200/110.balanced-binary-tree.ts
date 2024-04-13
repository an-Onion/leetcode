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
import { TreeNode } from '../dataStructure/TreeNode';

export function isBalanced( root: TreeNode | null ): boolean {

  type NextFunc = ( params: { ret: boolean, height?: number } ) => boolean;

  function DFS( node: TreeNode | null, next: NextFunc ): boolean {

    if ( !node ) return next( { ret: true, height: 0 } );

    return DFS( node.left, ( left ) => {
      if ( !left.ret ) return next( { ret: false } );

      return DFS( node.right, ( right ) => {
        if ( !right.ret ) return next( { ret: false } );
        if ( Math.abs( left.height - right.height ) > 1 ) {
          return next( { ret: false } );
        }
        return next( { ret: true, height: Math.max( left.height, right.height ) + 1 } );
      } );
    } );

  }
  
  return DFS( root, ( params ) => params.ret );
}
// @lc code=end