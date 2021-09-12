/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
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

import { ListNode } from './dataStructure/ListNode';

export function deleteDuplicates( head: ListNode | null ): ListNode | null {

  const dummy = new ListNode( Infinity, head );

  let pre = dummy, slow = head, fast = head;

  while( slow ) {

    while( fast?.val === slow.val )
      fast = fast.next;

    if( fast === slow.next )
      pre = pre.next as ListNode;
    else
      pre.next = fast;

    slow = fast;
  }

  return dummy.next;
}
// @lc code=end

