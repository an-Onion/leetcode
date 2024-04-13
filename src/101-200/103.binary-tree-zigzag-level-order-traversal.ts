/*
 * @lc app=leetcode id=103 lang=typescript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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

export function zigzagLevelOrder( root: TreeNode | null ): number[][] {

  if(  !root ) return [];

  const ret: number[][] = [];

  const Q = [root];

  let tag = true;

  while( Q.length ){
    let len = Q.length;
    const level : number[] = [];
    while( len-- ){
      const top = Q.shift();
      level.push( top.val );
      if( top.left ) Q.push( top.left );
      if( top.right ) Q.push( top.right );
    }
    ret.push( tag ? level : level.reverse() );
    tag = !tag;
  }

  return ret;
}
// @lc code=end

