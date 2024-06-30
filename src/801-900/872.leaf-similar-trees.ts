/*
 * @lc app=leetcode id=872 lang=typescript
 *
 * [872] Leaf-Similar Trees
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

export function leafSimilar( root1: TreeNode | null, root2: TreeNode | null ): boolean {

  const leaves1 = DFS( root1, ( ret ) => ret );
  const leaves2 = DFS( root2, ( ret ) => ret );
  return leaves1.toString() === leaves2.toString();

  function DFS( node: TreeNode | null, next: ( leaves: number[] ) => number[] ): number[] {
    if( !node ) return next( [] );
    if( !node.left && !node.right ) return next( [node.val] );

    return DFS( node.left, ( left ) => DFS( node.right, ( right ) => next( [...left, ...right] ) ) );
  }

}
// @lc code=end

