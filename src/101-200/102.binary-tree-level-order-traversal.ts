/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

export function levelOrder( root: TreeNode | null ): number[][] {

  if ( root === null ) return [];

  const ret: number[][] = [];
  const Q: TreeNode[] = [root];

  while ( Q.length ) {
    let size = Q.length;
    const level: number[] = [];
    while ( size-- ) {
      const top = Q.shift();
      level.push( top.val );
      top.left !== null && Q.push( top.left );
      top.right !== null && Q.push( top.right );
    }
    ret.push( level );
  }

  return ret;
}
// @lc code=end

