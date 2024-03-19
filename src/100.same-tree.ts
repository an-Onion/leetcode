/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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

export function isSameTree( p: TreeNode | null, q: TreeNode | null ): boolean {

  function DFS( p: TreeNode | null, q: TreeNode | null, cb: ( ret: boolean ) => boolean ) {

    if ( p === q ) return cb( true );
    if ( p?.val !== q?.val ) return cb( false );
    return DFS( p?.left, q?.left, 
      ( left ) => DFS( p?.right, q?.right, 
        ( right ) =>  cb( left && right ) ) );
  }

  return DFS( p, q, ( ret ) => ret );
}
// @lc code=end

