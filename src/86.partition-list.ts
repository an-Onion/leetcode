/*
 * @lc app=leetcode id=86 lang=typescript
 *
 * [86] Partition List
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

export function partition(head: ListNode | null, x: number): ListNode | null {

  const dummy = new ListNode(-1, head);
  let pre = dummy;
  const partition = new ListNode(-1);
  let pivot = partition;

  while( pre.next ){
    const p = pre.next;

    if(p.val >= x) {
      pre = pre.next;
      continue;
    }

    pivot.next = p;
    pre.next = p.next;
    pivot = pivot.next;
  }

  pivot.next = dummy.next;

  return partition.next;
}
// @lc code=end

