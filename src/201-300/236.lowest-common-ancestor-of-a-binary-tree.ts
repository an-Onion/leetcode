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

  type nextFunc = ( val: TreeNode | null ) => TreeNode | null;

  return DFS( root, ( node ) => node );

  function DFS( node: TreeNode, next: nextFunc ): TreeNode | null{

    if( !node ) return next( null );

    if( [p.val, q.val].includes( node.val ) )
      return next( node );

    return DFS( node.left, ( left ) => {
      return DFS( node.right, ( right ) => {
        const ret = ( left && right ) ? node : ( left || right );
        return next( ret );
      } );
    } );

  }
}
// @lc code=end

