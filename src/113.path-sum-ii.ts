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
import { TreeNode } from './dataStructure/TreeNode';

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {

  const ret: number[][] = [];

  DFS(root, [], () => {return;});

  return ret;

  function DFS(node: TreeNode | null, path: number[], cb): void {

    if( !node ) return cb();

    const next = [...path, node.val];

    if( node.left || node.right )
      return DFS(node.left, next, () => DFS(node.right, next, cb));

    // node is leaf
    if( sum(next) === targetSum ) ret.push(next);
    return cb();
  }

  function sum(path: number[]): number {
    return path.reduce((acc, val) => acc+val, 0);
  }

}
// @lc code=end

