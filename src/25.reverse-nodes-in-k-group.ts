/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {

  function reverse(start: ListNode, end: ListNode) {
    const dummy = new ListNode(-1, end);
    while( start != end ){
      const p = start;
      start = start.next;
      p.next = dummy.next;
      dummy.next = p;
    }
    return dummy.next;
  }

  const dummy = new ListNode(-1, head);
  let pre = dummy;
  for(let i = 1; head; ++i ){
    if( i % k === 0 ){
      const start = reverse(pre.next, head.next);
      head = pre.next;
      pre.next = start;
      pre = head;
    }

    head = head.next;
  }

  return dummy.next;
}
// @lc code=end

