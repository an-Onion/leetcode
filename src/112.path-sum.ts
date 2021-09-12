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
import { TreeNode } from '../src/dataStructure/TreeNode';

export function hasPathSum( root: TreeNode | null, targetSum: number ): boolean {

  return DFS( root, targetSum, ( ret ) => ret );

  function DFS( node: TreeNode | null, target: number, next: ( val: boolean ) => boolean ): boolean {

    if( !node ) return next( false );
    const delta = target - node.val;
    if( !node.right && !node.left ) return next( delta === 0 );

    return DFS( node.left, delta, ( left: boolean ) => {
      if( left ) return next( true );
      return DFS( node.right, delta, ( right: boolean ) => {
        return right ? next( true ) : next( false );
      } );
    } );
  }
}
// @lc code=end

