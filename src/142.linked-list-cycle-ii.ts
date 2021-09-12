/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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

export function detectCycle( head: ListNode | null ): ListNode | null {

  let p = hasCycle();
  if( !p ) return null;

  let q = head;

  while( p !== q ){
    p = p.next;
    q = q.next;
  }

  return p;

  function hasCycle(): ListNode | null{

    let fast = head, slow = head;

    while( slow && fast ){
      slow = slow.next;
      fast = fast?.next?.next;
      if( slow === fast ) return slow;
    }

    return null;
  }
}
// @lc code=end

