/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

export function minDepth( root: TreeNode | null ): number {

  if( !root ) return 0;

  const Q = [root];

  let depth = 1;

  while( Q.length ){
    let len = Q.length;
    while( len-- ) {
      const node = Q.shift();
      if( !node.left && !node.right ) return depth;
      if( node.left ) Q.push( node.left );
      if( node.right ) Q.push( node.right );
    }
    depth++;
  }
  return depth;
}
// @lc code=end

