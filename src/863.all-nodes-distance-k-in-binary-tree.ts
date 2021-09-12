/*
 * @lc app=leetcode id=863 lang=typescript
 *
 * [863] All Nodes Distance K in Binary Tree
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

export function distanceK( root: TreeNode | null, target: TreeNode | null, k: number ): number[] {

  const dist = Array( 501 ).fill( -1 );
  dist[target.val] = 0;

  findTarget( root );

  calcDistance( root, -1 );

  const ret: number[] = [];

  for( let i = 0; i < dist.length; i++ ) {
    if( dist[i] === k ){
      ret.push( i );
    }
  }

  return ret;

  function calcDistance( node: TreeNode | null, pre: number ): void {
    if( !node ) return;
    if( dist[node.val] === -1 ){
      dist[node.val] = pre + 1;
    }
    calcDistance( node.left, dist[node.val] );
    calcDistance( node.right, dist[node.val] );
  }

  function findTarget( node: TreeNode | null ):number {
    if( !node ) return -1;
    if( node.val === target.val ) return 0;

    const left = findTarget( node.left );
    if( left >= 0 ){
      return dist[node.val] = left+1;
    }

    const right = findTarget( node.right );
    if( right >= 0 ){
      return dist[node.val] = right+1;
    }

    return -1;
  }

}
// @lc code=end

