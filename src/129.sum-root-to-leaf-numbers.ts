/*
 * @lc app=leetcode id=129 lang=typescript
 *
 * [129] Sum Root to Leaf Numbers
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

export function sumNumbers( root: TreeNode | null ): number {


  type nextFunc = ( val: number[] ) => number;

  function DFS( node: TreeNode | null, prev: number, next: nextFunc ): number {
    
    if( !node ) return next( [] );

    prev = prev*10 + node.val;

    if( node.left === node.right ) return next( [ prev ] );

    return DFS( node.left, prev, ( left ) => {
      return DFS( node.right, prev, ( right ) => {
        return next( [ ...left, ...right ] );
      } );
    } );
  }
  return DFS( root, 0, ( raw ) => raw.reduce( ( prev, curr ) => prev + curr, 0 ) );

}
// @lc code=end

