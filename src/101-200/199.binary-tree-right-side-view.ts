/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
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
export function rightSideView( root: TreeNode | null ): number[] {

  if( !root ) return [];

  const queue = [root];
  let count = 1;
  const ret = [];
  while( queue.length ) {

    const node = queue.shift();

    node.left && queue.push( node.left );
    node.right && queue.push( node.right );

    if( --count ) continue;

    count = queue.length;
    ret.push( node.val );
  }
  return ret;
}
// @lc code=end

