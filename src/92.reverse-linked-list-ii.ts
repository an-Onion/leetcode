/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
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

export function reverseBetween( head: ListNode | null, left: number, right: number ): ListNode | null {

  const dummy = new ListNode( 0, head );

  let prev = dummy;

  for ( let i = 0; i < left - 1; i++ ) {
    prev = prev.next;
  }
  const cur = prev.next;
  
  for ( let i = left; i < right; i++ ) {
    const next = cur.next;
    cur.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;


}
// @lc code=end

