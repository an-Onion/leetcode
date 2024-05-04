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

  const Q = [root];
  const ret = [];

  while( Q.length ){

    let size = Q.length;

    while( size-- ){
      const node = Q.shift();
      if( size === 0 ){
        ret.push( node.val );
      }
      if( node.left ) Q.push( node.left );
      if( node.right ) Q.push( node.right );
    }
  }
  return ret;
}
// @lc code=end

