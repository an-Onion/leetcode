/*
 * @lc app=leetcode id=971 lang=typescript
 *
 * [971] Flip Binary Tree To Match Preorder Traversal
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

export function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {

  const stack: TreeNode[] = [];
  stack.push(root);
  const ret: number[] = [];
  let i = 0;

  while(stack.length){
    const node = stack.pop();

    if( !node ) continue;

    if( node.val !== voyage[i] ) return [-1];

    i++;

    if( node.left && node.left.val === voyage[i] ){
      stack.push(node.right, node.left);
      continue;
    }


    stack.push(node.left, node.right);

    if( node.left && node.right ) ret.push(node.val);
  }

  return ret;
}
// @lc code=end

