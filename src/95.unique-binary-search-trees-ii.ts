/*
 * @lc app=leetcode id=95 lang=typescript
 *
 * [95] Unique Binary Search Trees II
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

export function generateTrees( n: number ): Array<TreeNode | null> {

  return DFS( 1,n );

  function DFS( low: number, up: number ): Array<TreeNode | null> {

    if( low > up ) return [null];

    const res = [];

    for( let i = low; i <=up; i++ ) {

      const left = DFS( low, i-1 );
      const right = DFS( i+1, up );

      for( const l of left ) {
        for( const r of right ) {
          const node = new TreeNode( i, l, r );
          res.push( node );
        }
      }
    }
    return res;
  }

}
// @lc code=end

