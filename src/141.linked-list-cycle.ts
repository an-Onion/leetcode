/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

export function hasCycle( head: ListNode | null ): boolean {
  const dummy = new ListNode( 0, head );
  let slow = dummy, fast = dummy;

  while( fast && fast.next ){
    slow = slow.next;
    fast = fast.next.next;
    if( slow === fast ){
      return true;
    }
  }
  return false;
}
// @lc code=end

