/*
 * @lc app=leetcode id=114 lang=typescript
 *
 * [114] Flatten Binary Tree to Linked List
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

/**
 Do not return anything, modify root in-place instead.
 */
import { TreeNode } from './dataStructure/TreeNode';

export function flatten( root: TreeNode | null ): void {

  DFS( root, ( ret ) => ret );

  type nextFunc = ( node: TreeNode | null ) => TreeNode | null;

  function DFS( node: TreeNode | null, next: nextFunc ): TreeNode | null {

    if( !node ) return next( null );

    return DFS( node.right ,( right ) => DFS( node.left,
      ( left ) => {
        if( left ){
          left.right = node.right;
          node.right = node.left;
          node.left = null;
        }
        return next( right || left || node );
      } )
    );
  }
}
// @lc code=end

