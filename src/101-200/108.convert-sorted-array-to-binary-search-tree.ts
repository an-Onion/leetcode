/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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

export function sortedArrayToBST( nums: number[] ): TreeNode | null {

  function DFS( arr: number[], next: ( ret: TreeNode | null ) => TreeNode | null ) {
    if ( arr.length === 0 ) return next( null );
    const idx = arr.length >> 1;
    const left = arr.splice( 0, idx );
    const val = arr.shift();
    const right = arr;
    return DFS( left, ( left ) => DFS( right, ( right ) => next( new TreeNode( val, left, right ) ) ) );
  }

  return DFS( nums, ( ret ) => ret );
}
// @lc code=end

