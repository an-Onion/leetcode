/*
 * @lc app=leetcode id=107 lang=typescript
 *
 * [107] Binary Tree Level Order Traversal II
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

export function levelOrderBottom( root: TreeNode | null ): number[][] {

  if ( !root ) return [];

  const ret: number[][] = [];

  const Q = [root];

  while ( Q.length ) {
    let size = Q.length;
    const level = [];
    while( size-- ){
      const top = Q.shift();
      level.push( top.val );
      if ( top.left ) Q.push( top.left );
      if ( top.right ) Q.push( top.right );
    }
    ret.push( level );
  }

  return ret.reverse();
}
// @lc code=end

