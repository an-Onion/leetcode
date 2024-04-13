/*
 * @lc app=leetcode id=109 lang=typescript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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
import { ListNode } from '../dataStructure/ListNode';
import { TreeNode } from '../dataStructure/TreeNode';

export function sortedListToBST( head: ListNode | null ): TreeNode | null {

  function DFS( head: ListNode | null, next: ( ret: TreeNode | null ) => TreeNode | null ) {
    if( head === null ) return next( null );
    const dummy = new ListNode( Infinity, head );

    let slow = dummy, fast = head;
    while( fast !== null && fast.next !== null ) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const node = slow.next;
    slow.next = null;
    
    return DFS( dummy.next, ( left ) => {
      return DFS( node.next, ( right ) => {
        return next( new TreeNode( node.val, left, right ) );
      } );
      
    } );
  }

  return DFS( head, ( ret ) => ret );
}
// @lc code=end

