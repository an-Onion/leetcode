/*
 * @lc app=leetcode id=113 lang=typescript
 *
 * [113] Path Sum II
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

export function pathSum( root: TreeNode | null, targetSum: number ): number[][] {

  type nextFunc = ( res: number[][] ) => number[][];

  function DFS( node: TreeNode | null, sum: number, path: number[], cb: nextFunc ): number[][] {

    if( !node ) return cb( [] );

    sum += node.val;
    
    if( node.left === node.right ) {
      if( sum === targetSum ) {
        return cb( [ [ ...path, node.val ] ] );
      }
      return cb( [] );
    }

    return DFS( node.left, sum, [ ...path, node.val ], ( left ) => {
      return DFS( node.right, sum, [ ...path, node.val ], ( right ) => {
        return cb( [ ...left, ...right ] );
      } );
    } );

  }

  return DFS( root, 0, [], ( ret ) => ret );
}
// @lc code=end

