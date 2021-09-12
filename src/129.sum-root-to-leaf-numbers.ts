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

  return DFS( root, 0, ( arr ) => arr.reduce( ( a, b ) => a + b, 0 ) );

  type nextFunc = ( val: number[] ) => number;

  function DFS( node: TreeNode | null, pre: number, next: nextFunc ) {

    if( !node ) return next( [] );

    const sum = pre * 10 + node.val;

    if( !node.left && !node.right ) return next( [sum] );

    return DFS( node.left, sum,
      ( left ) => DFS( node.right, sum,
        ( right ) => next( [...left, ...right] )
      )
    );
  }

}
// @lc code=end

