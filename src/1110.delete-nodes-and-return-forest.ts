/*
 * @lc app=leetcode id=1110 lang=typescript
 *
 * [1110] Delete Nodes And Return Forest
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

export function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {

  type nextFunc = (child: TreeNode[]) => TreeNode[];

  return DFS(root, (trees) => trees.filter((tree) => tree) );

  function DFS(node, next: nextFunc): Array<TreeNode | null> {

    if( !node ) return next([null]);

    const res = [];

    if(!to_delete.includes(node.val))
      res.push(node);

    return DFS(node.left, (left) => {

      if( res.length && left[0] === node.left){
        left.shift();
      } else node.left = null;

      return DFS(node.right, (right) => {

        if( res.length && right[0] === node.right ){
          right.shift();
        } else node.right = null;

        return next([...res, ...left, ...right]);
      });
    });
  }
}
// @lc code=end

