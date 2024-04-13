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
import { TreeNode } from '../dataStructure/TreeNode';

export function generateTrees( n: number ): Array<TreeNode | null> {

  function DFS( start: number, end:  number ): Array<TreeNode | null> {
    
    if( start > end ) return [null];

    const ret: Array<TreeNode | null> = [];

    for( let i = start; i <= end; i++ ){
      const lefts = DFS( start, i - 1 );
      const rights = DFS( i + 1, end );

      for( const left of lefts ){
        for( const right of rights ){
          ret.push( new TreeNode( i, left, right ) );
        }
      }
    }
    return ret;
  }

  return DFS( 1, n );
}
// @lc code=end

