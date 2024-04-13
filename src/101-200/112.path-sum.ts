/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

export function hasPathSum( root: TreeNode | null, targetSum: number ): boolean {

  function DFS( node: TreeNode | null, sum: number, next: ( ret: boolean ) => boolean ): boolean {
    
    if( !node ) return next( false );

    sum += node.val;

    if( node.left === node.right ){
      return next( sum === targetSum );
    }

    return DFS( node.left, sum, ( left ) => {
      if( left ) return next( true );
      return DFS( node.right, sum, ( right ) => next( right ) );
    } );
  }

  return DFS( root, 0, ( ret ) => ret );
}
// @lc code=end

