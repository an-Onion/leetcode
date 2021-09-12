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
import { ListNode } from '../src/dataStructure/ListNode';
import { TreeNode } from '../src/dataStructure/TreeNode';

export function sortedListToBST( head: ListNode | null ): TreeNode | null {

  if( !head ) return null;

  const dummy = new ListNode( -1, head );

  let fast = dummy, slow = dummy;

  while( fast ) {
    fast = fast?.next?.next;
    slow = slow.next;
  }

  let pre = dummy;
  while( pre.next !== slow ) pre = pre.next;
  pre.next = null;

  const left = sortedListToBST( dummy.next );
  const right = sortedListToBST( slow.next );

  return new TreeNode( slow.val, left, right );
}
// @lc code=end

