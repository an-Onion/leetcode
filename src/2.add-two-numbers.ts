/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy: ListNode =  new ListNode();
  let cursor: ListNode | null = dummy;
  let carry = 0;

  while( l1 || l2 || carry){
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    cursor.next = new ListNode(sum % 10);
    carry = sum / 10 | 0;
    cursor = cursor.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return dummy.next;
}
// @lc code=end
